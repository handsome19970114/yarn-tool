<template>
    <div :id="container" ref="chartRef" class="container"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    props: {
        container: {
            type: String,
            default: "container",
        },

        options: {
            type: Object,
            default: () => {},
            required: true,
        },
    },

    mounted() {
        let container = document.getElementById("container");
        Object.assign(this, { Aecharts: echarts.init(container) });
        this.Aecharts.setOption(this.options);
        this.Aecharts.on("click", (e) => {
            console.log(e, "--------------");
        });
    },
};
</script>

<style scoped>
.container {
    width: 640px;
    height: 400px;
    /* background-color: #4093ff; */
    margin: 0 auto;
}
</style>