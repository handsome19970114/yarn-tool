export default {
  computed: {
    activeComponentId() {
      return this.tabPanes.find((paneItem) => paneItem.key == this.activeTabKey)?.componentId;
    },
  },
  mounted() {
    this.activeTabKey = '0';
  },
  data() {
    return {
      activeTabKey: '',
      form: {},
      tabPanes: [],
      show: false,
    };
  },
  methods: {
    handleCustomComponents(components) {
      const comKeys = Object.keys(components);
      this.tabPanes = comKeys.map((com, index) => ({label: components[com].title || `默认-${index}`, key: index.toString(), componentId: com}));
    },
  },
};
