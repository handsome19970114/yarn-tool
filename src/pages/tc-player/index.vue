<template>
    <div class="tc-container">
        <el-page-header @back="() => null" content="腾讯视频"></el-page-header>

        <ul class="device-container">
            <li class="device-item" v-for="device in devices" :key="device.id">
                <el-card class="box-card">
                    <i class="el-icon-video-play" @click="handlePlay(device)"></i>
                    <TcPlayer :videoURL="device.videoURL" controls="none"></TcPlayer>
                </el-card>
            </li>
        </ul>

        <el-dialog title="视频播放" :visible.sync="dialogVisible" width="75%" :before-close="handleClose"
            :destroy-on-close="true">
            <div style="width: 100%;">
                <TcPlayer v-if='dialogForm.videoURL' :videoURL="dialogForm.videoURL" controls="none"></TcPlayer>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { listDevice, queryVideoDevicesStatus, getPlayURL } from "@/request/api"
import TcPlayer from "@/components/TcPlayer.vue"

const DEVICE_OUTER_ID = ['J96097777', 'J96097830']; // 下游钢栈桥 县道路口

export default {
    data() {
        return {
            devices: [],
            dialogVisible: false,
            dialogForm: {}
        }
    },
    components: {
        TcPlayer
    },
    mounted() {
        this.getDevices()
    },
    methods: {
        async getDevices() {
            const deviceRes = await listDevice({ category: "VIDEO" });
            const statusInfo = await this.queryDevicesStatus()
            const devices = deviceRes.data.filter(device => DEVICE_OUTER_ID.includes(device.deviceOuterId))
            const reduceDevices = devices.reduce((curr, next) => {
                const status = statusInfo[next.deviceOuterId]
                const channelList = ((Array.isArray(next.channelList) && next.channelList.length > 0) ? next.channelList : []).map(item => ({ ...next, ...item, status }))
                return curr.concat(channelList)
            }, [])

            for (const item of reduceDevices) {
                const videoURL = await this.getVideoPlayURL({ deviceOuterId: item.deviceOuterId, channelOuterId: item.channelOuterId })
                item.videoURL = videoURL
            }
            this.devices = reduceDevices
        },

        async queryDevicesStatus() {
            const res = await queryVideoDevicesStatus()
            if (res.data == null) {
                return {}
            }
            return res.data.statusInfo.reduce((curr, next) => {
                curr[next.deviceOuterId] = next.status
                return curr
            }, {});
        },

        async getVideoPlayURL(params) {
            const { deviceOuterId, channelOuterId } = params
            const res = await getPlayURL(deviceOuterId, channelOuterId)
            return res?.data?.url || ""
        },

        async handlePlay(item) {
            const res = await this.getVideoPlayURL(item)
            this.dialogForm = { ...item, videoURL: res };
            this.dialogVisible = true;
        },

        handleClose() {
            this.dialogVisible = false
        }
    }
}
</script>

<style lang="scss">
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.tc-container {
    width: 100%;
    height: 100%;
}

.device-container {
    width: 100%;
    // margin-top: 20px;
}

.device-item {
    width: 23.5%;
    margin-left: 2%;
    float: left;
    margin-top: 20px;
    cursor: pointer;
    position: relative;

    &:nth-of-type(4n+1) {
        margin-left: 0;
    }

    .el-card {
        .el-card__body {
            padding: 0;
            min-height: 240px;

            .el-icon-video-play {
                font-size: 36px;
                position: absolute;
                z-index: 1000;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
            }
        }
    }
}
</style>
