<template>
    <div class="about">
        <div id='box' ref="box">
            hello world!
        </div>

        <el-button @click="handleCreate">生成</el-button>
    </div>
</template>

<script>
import { ExportImg } from "@/utils";
export default {
    data() {
        return {};
    },
    methods: {
        handleCreate() {
            ExportImg(this.$refs.box, "八方网络", "jpg");
        },
    },
};
</script>

<style scoped>
#box {
    width: 200px;
    height: 200px;
    background-color: #409eff;
    margin: 0 auto;
    line-height: 200px;
    color: aqua;
}
</style>
