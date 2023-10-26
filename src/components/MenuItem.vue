<template>
    <div>
        <template v-if="route.children">
            <el-submenu :index="route.path">
                <template #title>
                    <span class="menu--icon">
                        <i v-if="route.meta.icon" :class="route.meta.icon" style="font-size:18px"></i>
                    </span>
                    <span>{{ route.meta.title }}</span>
                </template>
                <MenuItem v-for="child in route.children" :route="child" :key="child.path" />
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="route.path">
                <span class="menu--icon">
                    <i v-if="route.meta.icon" :class="route.meta.icon" style="font-size:18px"></i>
                </span>
                <span>{{ route.meta.title }}</span>
            </el-menu-item>
        </template>
    </div>
</template>
  
<script>
export default {
    name: "MenuItem",
    props: {
        route: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/ .el-submenu {
    &__title {
        text-align: left;
    }
}

/deep/ .el-menu {
    &-item {
        padding-left: 0 !important;
        padding: 0 20px !important;
        text-align: left;
    }
}

.menu--icon {
    min-width: 24px;
    display: inline-block;
    > i {
        margin-top: -2px;
    }
}
</style>