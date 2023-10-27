<template>
    <div class="page-not-found">
        <div class="not-found-img">
            <img src="@/assets/404/404.gif" alt="">
        </div>
        <div style="margin-bottom: 20px;"> 抱歉，您访问的页面不存在。</div>
        <el-button @click="$router.replace('/')">返回首页</el-button>
    </div>
</template>

<style lang="scss" scoped>
.page-not-found {
    width: 100vw;
    height: 100vh;
}
</style>