<template>
    <div class="img-thief">
        <div class="container">
            <div class="thief-item" v-for="(item, index) in imgList" :key="item">
                <img draggable="false" :src="item" alt="" @contextmenu.prevent
                    @mouseenter="handleMouseEnter($event.target, index)"
                    @mouseleave="handleMouseLeave($event.target, index)"
                    :style="{ opacity: index === hoverIndex ? 1 : hoverIndex === -1 ? 1 : 0.2 }">
            </div>
        </div>
    </div>
</template>
<script>
import ColorThief from "colorthief";
const colorThief = new ColorThief();
export default {
    data() {
        return {
            imgList: [
                require("@/assets/thief/1.jpg"),
                require("@/assets/thief/2.jpg"),
                require("@/assets/thief/3.jpg"),
                require("@/assets/thief/4.jpg"),
            ],
            hoverIndex: -1,
        };
    },

    methods: {
        handleMouseEnter(item, index) {
            let html = document.documentElement;
            this.hoverIndex = index;
            const thiefColors = colorThief.getPalette(item, 3);
            const mapThiefColors = thiefColors.map(
                (color) => `rgb(${color[0]},${color[1]},${color[2]})`
            );
            html.style.setProperty("--thief-bg-color1", mapThiefColors[0]);
            html.style.setProperty("--thief-bg-color2", mapThiefColors[1]);
            html.style.setProperty("--thief-bg-color3", mapThiefColors[2]);
        },
        handleMouseLeave() {
            let html = document.documentElement;
            this.hoverIndex = -1;
            html.style.setProperty("--thief-bg-color1", "#fff");
            html.style.setProperty("--thief-bg-color2", "#fff");
            html.style.setProperty("--thief-bg-color3", "#fff");
        },
    },
};
</script>

<style lang="scss" scoped>
.img-thief {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(to top,
            var(--thief-bg-color1),
            var(--thief-bg-color2),
            var(--thief-bg-color3));
}

.container {
    width: 800px;
    height: 800px;
}

.thief-item {
    width: 370px;
    height: 370px;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    box-sizing: border-box;
    border: 4px solid transparent;

    &:hover {
        border: 4px solid #fff;
        cursor: pointer;
        transform: translateZ(10px) scale(1.02);
        transition: all 0.8s;
    }

    img {
        width: 100%;
        height: 100%;
        user-select: none;
        display: block;
    }
}
</style>