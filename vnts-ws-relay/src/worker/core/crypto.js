// 加密相关功能  
export function randomU64String() {  
  const array = new Uint8Array(8);  
  crypto.getRandomValues(array);  
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');  
}  
  
export function sha256(data) {  
  return crypto.subtle.digest('SHA-256', data);  
}  
  
export class AesCipher {  
  constructor(key) {  
    this.key = key;  
  }  
  
  async encrypt(data) {  
    // AES 加密实现  
    return data; // 简化实现  
  }  
  
  async decrypt(data) {  
    // AES 解密实现  
    return data; // 简化实现  
  }  
}
