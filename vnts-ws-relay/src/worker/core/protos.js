import root from './protos_generated.js';  
  
let cachedTypes;  
  
export function loadProtos() {  
  if (cachedTypes) return cachedTypes;  
    
  return cachedTypes = {  
    root,  
    // VNT 消息类型  
    HandshakeRequest: root.message.HandshakeRequest,  
    HandshakeResponse: root.message.HandshakeResponse,  
    SecretHandshakeRequest: root.message.SecretHandshakeRequest,  
    RegistrationRequest: root.message.RegistrationRequest,  
    RegistrationResponse: root.message.RegistrationResponse,  
    DeviceInfo: root.message.DeviceInfo,  
    DeviceList: root.message.DeviceList,  
    PunchInfo: root.message.PunchInfo,  
    ClientStatusInfo: root.message.ClientStatusInfo,  
    RouteItem: root.message.RouteItem,  
      
    // 枚举类型  
    PunchNatType: root.message.PunchNatType,  
    PunchNatModel: root.message.PunchNatModel,  
  };  
}  
  
export function createHandshakeRequest(version, secret, keyFinger) {  
  const types = loadProtos();  
  const request = types.HandshakeRequest.create({  
    version: version || "1.0.0",  
    secret: secret || false,  
    key_finger: keyFinger || ""  
  });  
  return types.HandshakeRequest.encode(request).finish();  
}  
  
export function createHandshakeResponse(version, secret, publicKey, keyFinger) {  
  const types = loadProtos();  
  const response = types.HandshakeResponse.create({  
    version: version || "1.0.0",  
    secret: secret || false,  
    public_key: publicKey || new Uint8Array(0),  
    key_finger: keyFinger || ""  
  });  
  return types.HandshakeResponse.encode(response).finish();  
}  
  
export function createSecretHandshakeRequest(token, key) {  
  const types = loadProtos();  
  const request = types.SecretHandshakeRequest.create({  
    token: token || "",  
    key: key || new Uint8Array(0)  
  });  
  return types.SecretHandshakeRequest.encode(request).finish();  
}  
  
export function createRegistrationRequest(token, deviceId, name, version, virtualIp, clientSecretHash) {  
  const types = loadProtos();  
  const request = types.RegistrationRequest.create({  
    token: token || "default",  
    device_id: deviceId || "",  
    name: name || "client",  
    is_fast: false,  
    version: version || "1.0.0",  
    virtual_ip: virtualIp || 0,  
    allow_ip_change: false,  
    client_secret: false,  
    client_secret_hash: clientSecretHash || new Uint8Array(0)  
  });  
  return types.RegistrationRequest.encode(request).finish();  
}  
  
export function createRegistrationResponse(virtualIp, gateway, netmask, epoch, deviceInfoList, publicIp, publicPort) {  
  const types = loadProtos();  
  const response = types.RegistrationResponse.create({  
    virtual_ip: virtualIp || 0,  
    virtual_gateway: gateway || 0,  
    virtual_netmask: netmask || 0,  
    epoch: epoch || 0,  
    device_info_list: deviceInfoList || [],  
    public_ip: publicIp || 0,  
    public_port: publicPort || 0,  
    public_ipv6: new Uint8Array(0)  
  });  
  return types.RegistrationResponse.encode(response).finish();  
}  
  
export function createDeviceInfo(name, virtualIp, deviceStatus, clientSecret, clientSecretHash, wireguard) {  
  const types = loadProtos();  
  const deviceInfo = types.DeviceInfo.create({  
    name: name || "",  
    virtual_ip: virtualIp || 0,  
    device_status: deviceStatus || 0,  
    client_secret: clientSecret || false,  
    client_secret_hash: clientSecretHash || new Uint8Array(0),  
    wireguard: wireguard || false  
  });  
  return types.DeviceInfo.encode(deviceInfo).finish();  
}  
  
export function createDeviceList(epoch, deviceInfoList) {  
  const types = loadProtos();  
  const deviceList = types.DeviceList.create({  
    epoch: epoch || 0,  
    device_info_list: deviceInfoList || []  
  });  
  return types.DeviceList.encode(deviceList).finish();  
}  
  
export function createPunchInfo(publicIpList, publicPort, portRange, natType, reply, localIp, localPort, ipv6, ipv6Port, tcpPort, udpPorts, publicPorts, publicTcpPort, punchModel) {  
  const types = loadProtos();  
  const punchInfo = types.PunchInfo.create({  
    public_ip_list: publicIpList || [],  
    public_port: publicPort || 0,  
    public_port_range: portRange || 0,  
    nat_type: natType || types.PunchNatType.Symmetric,  
    reply: reply || false,  
    local_ip: localIp || 0,  
    local_port: localPort || 0,  
    ipv6: ipv6 || new Uint8Array(0),  
    ipv6_port: ipv6Port || 0,  
    tcp_port: tcpPort || 0,  
    udp_ports: udpPorts || [],  
    public_ports: publicPorts || [],  
    public_tcp_port: publicTcpPort || 0,  
    punch_model: punchModel || types.PunchNatModel.All  
  });  
  return types.PunchInfo.encode(punchInfo).finish();  
}  
  
export function createClientStatusInfo(source, p2pList, upStream, downStream, natType) {  
  const types = loadProtos();  
  const clientStatusInfo = types.ClientStatusInfo.create({  
    source: source || 0,  
    p2p_list: p2pList || [],  
    up_stream: upStream || 0,  
    down_stream: downStream || 0,  
    nat_type: natType || types.PunchNatType.Symmetric  
  });  
  return types.ClientStatusInfo.encode(clientStatusInfo).finish();  
}  
  
export function createRouteItem(nextIp) {  
  const types = loadProtos();  
  const routeItem = types.RouteItem.create({  
    next_ip: nextIp || 0  
  });  
  return types.RouteItem.encode(routeItem).finish();  
}  
  
// 解析函数  
export function parseHandshakeRequest(data) {  
  const types = loadProtos();  
  return types.HandshakeRequest.decode(data);  
}  
  
export function parseHandshakeResponse(data) {  
  const types = loadProtos();  
  return types.HandshakeResponse.decode(data);  
}  
  
export function parseSecretHandshakeRequest(data) {  
  const types = loadProtos();  
  return types.SecretHandshakeRequest.decode(data);  
}  
  
export function parseRegistrationRequest(data) {  
  const types = loadProtos();  
  return types.RegistrationRequest.decode(data);  
}  
  
export function parseRegistrationResponse(data) {  
  const types = loadProtos();  
  return types.RegistrationResponse.decode(data);  
}  
  
export function parseDeviceInfo(data) {  
  const types = loadProtos();  
  return types.DeviceInfo.decode(data);  
}  
  
export function parseDeviceList(data) {  
  const types = loadProtos();  
  return types.DeviceList.decode(data);  
}  
  
export function parsePunchInfo(data) {  
  const types = loadProtos();  
  return types.PunchInfo.decode(data);  
}  
  
export function parseClientStatusInfo(data) {  
  const types = loadProtos();  
  return types.ClientStatusInfo.decode(data);  
}  
  
export function parseRouteItem(data) {  
  const types = loadProtos();  
  return types.RouteItem.decode(data);  
}
