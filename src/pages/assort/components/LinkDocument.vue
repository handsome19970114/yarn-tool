<template>
    <div class="link-document">
        <el-row v-for="link in links" :key="link.id">
            <el-col :span="24">
                <el-input placeholder="请输入内容" :value="link.link" readonly class="input-with-select">
                    <el-button slot="prepend" class="btn-name">{{link.title}}</el-button>
                    <el-button slot="append" @click="handleClick(link)">跳转</el-button>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    id: "1",
                    link: "https://vue-echarts.dev/",
                    title: "vue-echarts",
                },
                {
                    id: "2",
                    link: "https://echarts.apache.org/zh/index.html",
                    title: "echarts",
                },
                {
                    id: "3",
                    link: "https://dayjs.fenxianglu.cn/",
                    title: "Day.js",
                },
                {
                    id: "4",
                    link: "https://www.axios-http.cn/",
                    title: "Axios",
                },
                {
                    id: "5",
                    link: "https://lokeshdhakar.com/projects/color-thief/",
                    title: "COLOR THIEF",
                },
                {
                    id: "6",
                    link: "https://cryptojs.gitbook.io/docs/",
                    title: "crypto-js",
                },
                {
                    id: "7",
                    link: "https://www.npmjs.com/package/md5",
                    title: "md5",
                },
                {
                    id: "8",
                    link: "https://github.com/animate-css/animate.css",
                    title: "animate.css",
                },
                {
                    id: "9",
                    link: "https://github.com/niklasvh/html2canvas",
                    title: "html2canvas",
                },
                {
                    id: "10",
                    link: "https://element.eleme.cn/",
                    title: "element-ui",
                },
            ],
        };
    },

    methods: {
        handleClick(link) {
            window.open(link.link);
        },
    },
};
</script>

<style lang="scss" scoped>
.el-row {
    margin-top: 18px;
}

/deep/ .el-input-group__prepend {
    width: 150px;
}
</style>