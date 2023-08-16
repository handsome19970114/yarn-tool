<template>
    <div class="home">
        <el-button type="primary" @click="openLoading">打开loading</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="primary" @click="openMessageBox">打开MessageBox</el-button>
    </div>
</template>

<script>
export default {
    name: "HomeView",
    components: {},
    methods: {
        openLoading() {
            const loading = this.$loading({
                lock: true,
            });

            loading.close();
        },

        openMessageBox() {
            this.$alert("这是一段内容", "标题名称", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.$message({
                        type: "info",
                        message: `action: ${action}`,
                    });
                },
            });
        },
    },
};
</script>

style
