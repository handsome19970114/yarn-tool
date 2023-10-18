<template>
    <div :id="`tc-player-box-${randomKey}`" style="width: 100%;height: auto;">
    </div>
</template>

<script>
import { TcPlayer } from "@/utils/TcPlayer-module-2.4.1.js"
export default {
    props: {
        videoURL: {
            type: String,
            required: true,
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        controls: {
            type: String,
            default: "default"
        }
    },
    beforeDestroy() {
        this.playerInstance && this.playerInstance.destroy()
    },
    data() {
        return {
            playerInstance: null,
            randomKey: new Date().getTime() + '-' + Math.random()
        }
    },
    mounted() {
        this.initPlayerInstance()
    },
    methods: {
        initPlayerInstance() {
            const options = {
                m3u8: this.videoURL,
                autoPlay: this.autoPlay,
                preload: 'auto',
                width: "100%",
                height: "100%",
                volume: 0.5,
                controls: this.controls,
                listener: (msg) => {
                    // console.log(msg, "msg------------------");
                },

            }
            this.playerInstance = new TcPlayer(`tc-player-box-${this.randomKey}`, options)
        }
    }
}
</script>