<template>
    <div>
        <button @click="show = !show">
            {{ show ? '收起' : '展开' }}
        </button>

        <transition name="fold-height">
            <div v-if="show" class="box"></div>
        </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        };
    },
};
</script>

<style>
.box {
    width: 100px;
    height: 100px;
    background: red;
}

.fold-height-enter-active,
.fold-height-leave-active {
    transition: height 0.5s ease;
    overflow: hidden;
}

.fold-height-enter,
.fold-height-leave-to {
    height: 0;
}
</style>