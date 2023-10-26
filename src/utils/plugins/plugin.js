import SelfTable from '@/pages/tool/components/ExplainTable.vue';
export default {
  install(vm, options) {
    const component = vm.extend({
      extends: SelfTable,
      mounted() {
        this.$message.success('测试组件的继承');
      },
    });
    vm.component('self-table', component);
  },
};
