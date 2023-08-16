<template>
    <div class="container">
        <V3Echarts :options="options"></V3Echarts>
    </div>
</template>

<script>
import V3Echarts from "@/components/V3Echarts";

const options = {
    title: {
        text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
        {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
};
export default {
    components: { V3Echarts },
    data() {
        return {
            options,
        };
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    height: calc(100% - 150px);
    background-color: transparent;
}
</style>