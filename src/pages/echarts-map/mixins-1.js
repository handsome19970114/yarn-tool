import china from './china.json';
import 'echarts/lib/chart/map';

let option = {
  backgroundColor: 'transparent', //背景色
  tooltip: {
    trigger: 'item',
    show: true,
    formatter: function (params) {
      //console.log(params);
      if (params.data && params.data.departmentnames.length) {
        let str = `${params.name}，共计${params.data.departmentnames.length}个事业部：<br />`;
        params.data.departmentnames.forEach((item) => {
          str += `${item}<br />`;
        });
        return str;
      } else {
        return `${params.name}省，共计0个事业部<br />`;
      }
    },
  },
  geo: {
    //地理坐标系组件   地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制
    map: 'china', //地图类型  这儿展示的是中国地图
    aspectScale: 0.85,
    selectedMode: 'single', // 开启单选
    label: {
      show: true, //是否显示标签  此处指是否显示地图上的地区名字
      color: '#ffffff',
      fontSize: 14,
    },
    roam: true, //是否开启鼠标缩放和平移漫游
    itemStyle: {
      areaColor: '#03365b',
      borderColor: '#4bf3f9',
      shadowColor: '#03365b', //阴影颜色
      shadowOffsetX: 0, //阴影偏移量
      shadowOffsetY: 20, //阴影偏移量
    },
    emphasis: {
      label: {
        show: true,
        color: '#ffffff',
      },
      itemStyle: {
        areaColor: '#0f5d9d',
      },
    },
  },
  series: [
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      showEffectOn: 'render',
      data: [
        { name: '上海', departmentnames: ['长三角设计中心-上海'], value: [121.4648, 31.2891], itemStyle: { color: '#f56321' } },
        { name: '重庆', departmentnames: ['总承包事业部', '桥梁事业部', '道路事业部', '轨道事业部', '生态环境事业部', '同望水利事业部', '城市发展事业部', '勘察事业部'], selected: true, value: [107.7539, 30.1904], itemStyle: { color: '#eeb804' } },
      ],
      rippleEffect: {
        brushType: 'stroke',
        scale: 5,
        period: 2, // 秒数
      },
      symbolSize: 12,
      clickable: false,
      hoverAnimation: true,
      zlevel: 1,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
        },
      },
    },
  ],
};

export default {
  data() {
    return {
      option,
    };
  },

  methods: {
    drawChina() {
      let myChart = this.$echarts.init(document.getElementById('map'));
      this.$echarts.registerMap('china', china); //注册可用的地图

      myChart.setOption(this.option);
    },

    getDomClientWidth() {
      return new Promise((resolve, reject) => {
        const dom = document.getElementById('map');
        const container = document.querySelector('.map-container');
        dom.style.width = container.clientWidth + 'px';
        dom.style.height = container.clientHeight + 'px';
        resolve();
      });
    },
  },
  async mounted() {
    await this.getDomClientWidth();
    this.drawChina();
  },
};
