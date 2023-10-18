<template>
    <div class="map-container">
        <div id="map" :key="Date.now()"></div>
    </div>
</template>
<script>
import mixins from "./mixins";

export default {
    mixins: [mixins],
};
</script>
<style lang="scss" scoped>
.map-container {
    width: 100%;
    height: 100%;
    background: gray;
}
</style>