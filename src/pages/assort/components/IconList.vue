<template>
    <div class="icon-container">
        <el-row style="margin-bottom:20px">
            <el-col :span="24">
                <el-input placeholder="" v-model="iconKeyword">
                </el-input>
            </el-col>
        </el-row>
        <ul class="icon-list" v-show="filterIconList.length > 0">
            <li class="icon-item" v-for="(icon, index) in filterIconList" :key="index"
                @click="handleCopy('el-icon-' + icon)">
                <el-icon :name="icon"></el-icon>
                <span>el-icon-{{ icon }}</span>
            </li>

            <div style="clear:both"></div>
        </ul>
    </div>
</template>
<script>
import IconJson from "../json/icon.json";
import { copyText } from "@/utils";
export default {
    data() {
        return {
            iconList: IconJson,
            iconKeyword: "",
        };
    },

    computed: {
        filterIconList() {
            return this.iconList.filter(
                (item) => item.indexOf(this.iconKeyword) > -1
            );
        },
    },

    methods: {
        handleCopy(icon) {
            copyText(icon);
            this.$message.success(`${icon} 复制到剪切板成功`)
        }
    }
};
</script>

<style lang="scss" scoped>
.icon-list {
    width: 100%;
    // border: 1px solid #eaeefb;
}

.icon-item {
    width: 12.5%;
    float: left;
    height: 160px;
    line-height: 160px;
    margin-right: -1px;
    border-top: 1px solid #eaeefb;
    border-left: 1px solid #eaeefb;
    border-bottom: 1px solid #eaeefb;
    margin-bottom: -1px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &:nth-last-child(2) {
        border-right: 1px solid #eaeefb;
    }

    &:nth-of-type(8n + 8) {
        border-right: 1px solid #eaeefb;
    }




    [class^="el-icon-"] {
        font-size: 32px;
    }

    >span {
        line-height: 24px;
        margin-top: 16px;
    }

    &:hover {
        cursor: pointer;
        user-select: none;
        animation: headShake 1s;
    }
}

.pri-btn {
    &:hover {
        cursor: pointer;
        animation: headShake 1s;
    }
}
</style>