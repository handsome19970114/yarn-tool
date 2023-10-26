<template>
    <el-menu router :default-active="defaultActive" :default-openeds="openeds" background-color="#00061a"
        text-color="#ffffffb3" active-text-color="#fff">
        <MenuItem v-for="route in menuList" :route="route" :key="route.path" />
    </el-menu>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
    name: "Menu",
    components: {
        MenuItem,
    },
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
    width: 210px;
    height: 100%;
    border-right: 1px solid #00061a;
    user-select: none;
}
</style>