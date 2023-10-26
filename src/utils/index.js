import html2canvas from 'html2canvas';
import dayjs from 'dayjs';

const secretKeys = {
  MATERIAL: '7bfca7a9dbe6f619', //加密秘钥
};

export function ExportImg(element, filename, ext) {
  html2canvas(element, {
    useCORS: true,
  }).then((canvas) => {
    if (navigator.msSaveBlob) {
      const blob = canvas.msToBlob(); // IE10+
      return navigator.msSaveBlob(blob, name);
    } else {
      const imageurl = canvas.toDataURL('image/png');
      const aLink = document.createElement('a'); // 创建a标签
      aLink.style.display = 'none';
      aLink.href = imageurl;
      aLink.download = `${filename}.${ext}`; // 下载文件名
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink); // 用完后移除元素
    }
  });
}

/**
 * @desc
 * @param { File } 文件file
 * @return { Boolean } 是图片 true 不是 false
 */
export function isImage(file) {
  // 检查文件MIME类型
  return file.type.startsWith('image/');
}

/**
 * @desc 复制到粘贴板
 * @param { String } 需要复制的字符串
 * @return { Boolean } 命令执行结果
 */
export function copyText(text) {
  // 创建一个临时输入框
  let input = document.createElement('input');
  input.value = text;
  // 将临时输入框添加到文档中
  document.body.appendChild(input);
  // 选择输入框中的内容
  input.select();
  // 执行复制
  let result = document.execCommand('copy');
  // 移除临时输入框
  document.body.removeChild(input);
  return result;
}

/**
 * @desc 是否是有效的可格式化时间
 * @param { String } dateString
 * @return { Boolean }
 */
export function isDateValid(dateString) {
  if (dateString === null || dateString === undefined) {
    return false;
  }
  return dayjs(dateString).isValid();
}
