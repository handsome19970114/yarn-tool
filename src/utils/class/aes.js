import CryptoJS from 'crypto-js';

class AESEncryption {
  constructor() {
    this.generateOption = this.generateOption.bind(this);
  }
  encrypt(data) {
    const secretData = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(secretData, this.key, this.options);
    return encrypted.toString();
  }

  decrypt(data) {
    const decrypt = CryptoJS.AES.decrypt(data, this.key, this.options);
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }

  generateOption(ivKey) {
    this.key = CryptoJS.enc.Utf8.parse(ivKey);
    this.options = {
      iv: this.key,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    };
  }
}

export default AESEncryption;
