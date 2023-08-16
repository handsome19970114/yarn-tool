<template>
    <ul class="list">
        <li class="item" v-for="item in list" :key="item.id" v-clickoutside="()=>handleClose(item)">
            <el-button @click="handleBtn(item)" type="primary">点击</el-button>
            <DropdownMenu v-show="item.showDrop"></DropdownMenu>
        </li>
    </ul>
</template>

<script>
import clickoutside from "@/directives/clickoutside.js";

const DropdownMenu = {
    template: `
        <ul class="menu">
            <li class="menuitem" @click="handleAdd">添加</li>
            <li class="menuitem" @click="handleDel">删除</li>
        </ul>`,
    created() {},
    methods: {
        handleAdd() {},
        handleDel() {},
    },
};
export default {
    components: {
        DropdownMenu,
    },
    directives: {
        clickoutside,
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    showDrop: false,
                    title: 1,
                },
                {
                    id: 2,
                    showDrop: false,
                    title: 2,
                },
                {
                    id: 3,
                    showDrop: false,
                    title: 3,
                },
            ],
        };
    },

    methods: {
        handleBtn(item) {
            item.showDrop = true;
        },
        handleClose(item) {
            item.showDrop = false;
        },
    },
};
</script>
<style lang="scss" scoped>
ul,
li {
    list-style: none;
    padding: 0;
    margin: 0;
}

.list {
    display: flex;
}
.item {
    width: 200px;
    height: 200px;
    background: goldenrod;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
    /deep/ .menu {
        position: absolute;
        top: 102%;
        right: 0;
        user-select: none;

        .menuitem {
            padding: 5px 10px;
            background: #f4f4f4;
            color: #666;

            &:hover {
                background: #bfd2e6;
            }
        }
    }
}
</style>