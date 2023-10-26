<template>
    <div class="chart-container">
        <el-row>
            <el-col :span="12">
                <v-chart :option='line' style="width:100%;height:calc((100vh - 114px) / 2)"
                    @click="handleLine($event,'click')" @mousemove="handleLine($event,'move')"></v-chart>
            </el-col>
            <el-col :span="12">
                <v-chart :option='pie' style="width:100%;height:calc((100vh - 114px) / 2)"></v-chart>
            </el-col>

        </el-row>

        <el-row style="margin-top:20px">
            <el-col :span="12">
                <v-chart :option='bar' style="width:100%;height:calc((100vh - 114px) / 2)"></v-chart>
            </el-col>
            <el-col :span="12">
                <v-chart :option='gauge' style="width:100%;height:calc((100vh - 114px) / 2)"></v-chart>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// 使用文档 https://github.com/ecomfe/vue-echarts/blob/5.x/README.zh_CN.md#vue-echarts
import chartOptions from "@/pages/home/chart-option";
export default {
    data() {
        return {
            ...chartOptions,
        };
    },

    methods: {
        handleLine(event, type) {
            // console.log(event, "------------event");
            // console.log(type, "-------------type");
        },
    },
};
</script>

<style lang="scss" scoped>
</style>