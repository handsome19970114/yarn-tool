<template>
    <div class="router-skip">
        <el-form label-width="0px">
            <el-form-item>
                <el-button type="primary" @click="openModal(item.key)" v-for="item in list" :key="item.key">{{ item.name
                }}</el-button>
            </el-form-item>
        </el-form>

        <el-dialog class="skip-dialog" title="" fullscreen :visible.sync="dialogVisible" width="80%"
            :before-close="handleClose">
            <iframe :src="skipIframeSrc" frameborder="0" allowfullscreen
                allow="microphone;camera;midi;encrypted-media;"></iframe>
        </el-dialog>
    </div>
</template>

<script>
import { capsRundeLogin } from "@/request/api"
export default {
    data() {
        return {
            dialogVisible: false,
            list: [
                {
                    key: 1,
                    name: "大体积温控系统",
                    loginUrl: "https://cccc.ccccltd.cn/wps/portal/ywtb/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziDVCAo4FTkJGTsYGBu7OJfjghBVEY0sgKgfqjsChBmGBhgFUBihkFuREGmY6KigAORUEE/dz/d5/L2dBISEvZ0FBIS9nQSEh/",
                    indexUrl: "https://cccc.ccccltd.cn/wps/portal/ywtb/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziDVCAo4FTkJGTsYGBu7OJfjghBVEY0sgKgfqjsChBmGBhgFUBihkFuREGmY6KigAORUEE/dz/d5/L2dBISEvZ0FBIS9nQSEh/"
                },
                {
                    key: 2,
                    name: "边坡监测",
                    loginUrl: "http://jcpt.gcglzx.cn/jcpt/login",
                    indexUrl: "http://jcpt.gcglzx.cn/jcpt/login"
                },
                {
                    key: 3,
                    name: "安全帽",
                    loginUrl: "https://caps.runde.pro",
                    indexUrl: "https://caps.runde.pro/index/syjc"
                },
            ],
            skipIframeSrc: ""
        }
    },
    methods: {
        async openModal(key) {
            let itemObj = this.list.find(item => item.key === key)
            this.skipIframeSrc = itemObj.indexUrl
            this.dialogVisible = true
            switch (key) {
                case 1:
                    console.log(1);
                    break;

                case 2:
                    console.log(2);

                    break;

                case 3:
                    const res = await this.handleSafetyHelmet()
                    if (typeof res === 'string' && res.indexOf('error')) {
                        return
                    }
                    this.skipIframeSrc = `https://caps.runde.pro/login#token=${res.session_id}&user_name=一航局平陆运河企石枢纽&target=home`
                    break;

                default:
                    break;
            }

        },
        handleClose() {
            this.dialogVisible = false
        },

        async handleSafetyHelmet() {
            const params = {
                ctl: "tool",
            }
            const loginInfo = {
                user_name: "一航局平陆运河企石枢纽",
                pwd: "Sh12345@"
            }
            try {
                params.act = "get_pkey"
                const p1 = await capsRundeLogin(params, loginInfo)
                if (!p1?.data) {
                    throw new Error("不存在pkey")
                }
                loginInfo.pkey = p1.data
                params.act = "get_token"
                const p2 = await capsRundeLogin(params, loginInfo)
                if (!p2?.session_id) {
                    throw new Error("不存在session_id")
                }
                return {
                    token: p2.token,
                    session_id: p2.session_id
                }

            } catch (error) {
                return "error"
            }
        }
    }
}
</script>

<style scoped lang='scss'>
.router-skip {
    width: 100%;
    height: 100%;
    text-align: left;
}

/deep/ .skip-dialog {
    .el-dialog {

        // height: 100%;
        .el-dialog__body {
            height: calc(100% - 90px);
        }

        iframe {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
