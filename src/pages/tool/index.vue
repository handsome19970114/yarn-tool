<template>
    <div class="inte-tool">
        <el-tabs v-model="activeTabKey">
            <el-tab-pane :label="tabPaneItem.label" :name="tabPaneItem.key" v-for="tabPaneItem in tabPanes"
                :key="tabPaneItem.key"></el-tab-pane>
        </el-tabs>
        <transition name="fade">
            <component :is="activeComponentId"></component>
        </transition>
    </div>
</template>
<script>
import customComponents from "./components"

export default {
    components: { ...customComponents },
    computed: {
        activeComponentId() {
            return this.tabPanes.find(paneItem => paneItem.key == this.activeTabKey)?.componentId
        }
    },
    mounted() {
        this.activeTabKey = "0"
        this.handleCustomComponents(customComponents)
    },
    data() {
        return {
            activeTabKey: '',
            form: {},
            tabPanes: [],
            show: false
        }
    },
    methods: {
        handleCustomComponents(components) {
            const comKeys = Object.keys(components);
            this.tabPanes = comKeys.map((com, index) => ({ label: components[com].title || `默认-${index}`, key: index.toString(), componentId: com }))
        }
    }
}
</script>

<style lang="scss" scoped>
.inte-tool {
    width: 100%;
    height: 100%;
}

.fade-enter-active {
    transform-origin: left center;
    animation: rubberBand 1s;
}

.fade-leave-active {
    transform-origin: left center;
    animation: rubberBand reverse;
}
</style>