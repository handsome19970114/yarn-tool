import china from './china.json';
import 'echarts/lib/chart/map';
import 'echarts-gl';

const option = {
  tooltip: {
    show: false,
    formatter: function () {
      return `<h1>我显示出来了吧</h1>`;
    },
  },
  geo3D: {
    show: false,
    map: 'china',
    boxWidth: 160,
    boxHeight: 1,
    shading: 'realistic',
    realisticMaterial: {
      textureTiling: 20,
      detailTexture: require('@/assets/woods.jpg'),
    },
    viewControl: {
      alpha: 45, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。
      beta: 10, // 视角绕 y 轴，即左右旋转的角度。
    },
  },
  series: [
    {
      type: 'map3D',
      map: 'china',
      boxWidth: 160,
      boxHeight: 1,
      shading: 'realistic',
      realisticMaterial: {
        textureTiling: 20,
        detailTexture: require('@/assets/woods.jpg'),
      },
      postEffect: {
        enable: true,
        bloom: {
          enable: false,
        },
        SSAO: {
          enable: true,
          quality: 'medium',
          radius: 10,
          intensity: 1.2,
        },
        depthOfField: {
          enable: false,
          focalRange: 5,
          fstop: 1,
          blurRadius: 6,
        },
      },
      groundPlane: {
        show: true,
        color: '#333',
      },
      viewControl: {
        alpha: 45, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。
        beta: 10, // 视角绕 y 轴，即左右旋转的角度。
      },
      itemStyle: {
        opacity: 1,
        borderWidth: 1, //分界线宽度
        borderColor: '#fff', //分界线颜色
      },
      emphasis: {
        label: {
          show: true,
          color: '#ffffff',
        },
        itemStyle: {
          color: '#ccc',
        },
      },
      label: {
        // 标签的相关设置
        show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
        formatter(param) {
          return `{sty|${param.name}}`;
        },
        rich: {
          sty: {},
        },
      },
      zlevel: 1,
    },
    // {
    //   type: 'scatter3D',
    //   coordinateSystem: 'geo3D',
    //   animation: false,
    //   symbol: 'image://' + require('@/assets/plyh.png'),
    //   symbolSize: [50 * 2, 50 * 2],
    //   zlevel: 10000,
    //   itemStyle: {
    //     color: 'rgb(50, 50, 150)',
    //     opacity: 1,
    //   },
    //   data: [
    //     {
    //       name: '重庆l',
    //       value: [107.5, 31.5, -1],
    //       label: {
    //         show: false,
    //       },
    //     },
    //     {
    //       name: '',
    //       value: ['-300.44806', '31.187265', -1],
    //     },
    //   ],
    // },
    // {
    //   type: 'lines3D',
    //   coordinateSystem: 'geo3D',
    //   polyline: true,
    //   data: [
    //     {
    //       coords: [
    //         [113.5969751, 34.68923049],
    //         [108.9614741, 34.27238284],
    //         [103.77815484, 36.06357837],
    //         [101.67110988, 36.50517919],
    //         [96.90918363, 35.99541825],
    //         [92.35796756, 34.82771619],
    //         [91.17803507, 31.76396604],
    //         [91.17804323, 29.69945178],
    //         [116.46, 39.92],
    //         [114.31, 30.52],
    //       ], // 路径的起点和终点，分别代表 [经度, 纬度]
    //       lineStyle: {
    //         color: 'rgb(0, 0, 0)',
    //         width: 4,
    //         curveness: 0,
    //       },
    //     },
    //     {
    //       coords: [
    //         [103.77815484, 36.06357837],
    //         [96.90918363, 35.99541825],
    //         [91.17804323, 29.69945178],
    //         [114.31, 30.52],
    //         [113.5969751, 34.68923049],
    //         [116.46, 39.92],
    //         [108.9614741, 34.27238284],
    //         [101.67110988, 36.50517919],
    //         [92.35796756, 34.82771619],
    //         [91.17803507, 31.76396604],
    //       ],
    //       lineStyle: {
    //         color: 'rgb(255, 0, 0)',
    //         width: 4,
    //         curveness: 0,
    //       },
    //     },
    //     {
    //       coords: [
    //         [91.17803507, 31.76396604],
    //         [91.17804323, 29.69945178],
    //         [116.46, 39.92],
    //         [108.9614741, 34.27238284],
    //         [103.77815484, 36.06357837],
    //         [101.67110988, 36.50517919],
    //         [96.90918363, 35.99541825],
    //         [114.31, 30.52],
    //         [113.5969751, 34.68923049],
    //         [92.35796756, 34.82771619],
    //       ],
    //       lineStyle: {
    //         color: 'rgba(255, 255, 0,0.5)',
    //         width: 10,
    //         curveness: 0,
    //       },
    //     },
    //   ],
    // },
  ],
};

export default {
  data() {
    return {
      option,
      myChart: null,
    };
  },

  methods: {
    drawChina() {
      this.myChart = this.$echarts.init(document.getElementById('map'));
      this.$echarts.registerMap('china', china); //注册可用的地图
      this.myChart.setOption(this.option);
      this.myChart.off('click');
      this.myChart.on('click', (event) => {
        if (event.seriesType == 'scatter3D') {
          this.$router.push('/');
        }
      });
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
    !this.myChart && this.drawChina();
  },
  beforeDestroy() {
    this.myChart.dispose();
  },
};
