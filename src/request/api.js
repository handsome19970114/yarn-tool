import request from './request';
import requestAn from './request-an';
import requestVideo from './request-video2';

const URLS = {
  uploadImage: '/upload',
  capsRundeLogin: '',
};

const API = {
  tokenInfo: '/api/monitoring/getTokenInfo',
  broadcastInfo: '/api/monitoring/getBroadcastInfos',
  listDevice: '/di-biz/device/queryDeviceList',
  devicePlayUrl: '/di-biz/device/queryLiveAddress',
  deviceStatus: '/di-biz/videoDevice/queryVideoDevicesStatusStatistics',
  queryAlarmMsgList: '/di-biz/videoDevice/queryAlarmMsgList',
  queryAlarmMsgList2: '/di-biz/deviceMessage/queryMessageList',
  downloadAlarmImage: '/di-biz/deviceMessage/downloadAlarmPic',
};

export const uploadImage = (data) => request({method: 'post', url: URLS.uploadImage, data});
export const capsRundeLogin = (params, data) => requestAn({method: 'post', url: URLS.capsRundeLogin, params, data});
export const listDevice = (data) => requestVideo({url: API.listDevice, method: 'post', data: {page: 0, size: 50, ...data}});
export const queryVideoDevicesStatus = () => requestVideo({url: API.deviceStatus});
export const getPlayURL = (deviceSerial, channelOuterId) => requestVideo({url: API.devicePlayUrl, method: 'post', params: {deviceOuterId: deviceSerial, channelOuterId}});
