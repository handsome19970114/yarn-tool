<template>
    <el-menu ref="elMenu" router :default-active="defaultActive" :default-openeds="openeds" background-color="#f4f4f4">
        <template v-for="item in menuList">
            <el-submenu v-if="item.children" :index="item.path">
                <template slot="title">
                    <i :class="item.icon"></i>
                    {{ item.meta.title }}
                </template>
                <Menu :menu-list="item.children"></Menu>
            </el-submenu>

            <el-menu-item v-else :index="item.path">
                <i :class="item.icon"></i>
                {{ item.meta.title }}
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
export default {
    name: "Menu",
    props: {
        menuList: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            defaultActive: "",
            openeds: ["/"],
        };
    },
    mounted() {
        this.defaultActive = this.$route.path;
    },

    methods: {},
};
</script>
<style lang="scss" scoped>
.el-menu {
    width: calc(100% - 1px);
    height: 100%;
    border-right: 1px solid #e6e6e6;
}
</style>