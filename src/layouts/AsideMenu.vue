<template>
    <el-container class="aside-container">
        <el-aside class="aside-aside">
            <Menu :menu-list="menuList"></Menu>
        </el-aside>
        <el-main class="aside-main">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import Menu from "@/components/Menu.vue";
import routerMap from "@/router/router.new";
export default {
    components: { Menu },
    data() {
        return {
            menuList: [],
        };
    },
    mounted() {
        this.menuList = routerMap.filter((menu) => menu.wetherDisplayInTheMenu);
    },
};
</script>

<style scoped lang='scss'>
.aside-container {
    width: 100%;
    height: 100%;
}

.aside-aside {
    overflow: auto;
    width: auto !important;
}

.aside-main {
    height: 100%;
    overflow: auto;
}
</style>