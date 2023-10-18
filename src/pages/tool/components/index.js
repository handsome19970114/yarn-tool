import GenerateMd5 from './GenerateMd5.vue';
import GenerateAes from './GenerateAes.vue';
import FormatterTime from './FormatterTime.vue';
export default {
  GenerateMd5: {...GenerateMd5, title: 'MD5'},
  GenerateAes: {...GenerateAes, title: 'AES'},
  FormatterTime: {...FormatterTime, title: '时间格式化'},
};
