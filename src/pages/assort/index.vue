<template>
    <div>
        <el-tabs v-model="activeTabKey">
            <el-tab-pane :label="tabPaneItem.label" :name="tabPaneItem.key" v-for="tabPaneItem in tabPanes"
                :key="tabPaneItem.key"></el-tab-pane>
        </el-tabs>
        <transition name="transition">
            <component :is="activeComponentId"></component>
        </transition>
    </div>
</template>
<script>
import customComponents from "./components";
import tabMixin from "@/mixins/tabMixin";

export default {
    components: { ...customComponents },
    mixins: [tabMixin],

    mounted() {
        this.handleCustomComponents(customComponents);
    },
};
</script>
