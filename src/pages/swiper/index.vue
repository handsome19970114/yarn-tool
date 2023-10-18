<template>
    <agile class="swiper" :infinite="true" :dots="true" :fade="true">
        <div v-for="slide in slides" :key="slide.id">
            <img :src="slide.imgUrl" alt="">
        </div>
    </agile>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    id: "1",
                    imgUrl: "https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641",
                    title: "钢结构防水技术-11",
                },
                {
                    id: "2",
                    imgUrl: "https://img1.baidu.com/it/u=56109659,3345510515&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1693501200&t=c273d3ecdc27b412cd4cd210fbef83f3",

                    title: "钢结构防水技术-12",
                },
            ],
        };
    },
};
</script>

<style scoped lang='scss'>
.swiper {
    width: 100%;
    /deep/ .agile__dots {
        /* 自定义分页器样式 */
        .agile__dot {
            > button {
                // width: 4px;
                // height: 4px;
                // background: #ffffff;
                // border-radius: 0px 0px 0px 0px;
                // opacity: 0.8;
                outline: none;
            }
        }
    }

    .agile__prev,
    .agile__next {
        /* 自定义 prev/next 按钮样式 */
    }
}
</style>