// 独立出来方便修改
window.Base = {
    baseUrl: 'http://ir.xmbhzt.com:9900',
    wsUrl: ['ws://ir.xmbhzt.com:9900/webSocket','ws://ir.xmbhzt.com:9902/webSocket'], // websocket地址。 后面不要/
    // baseUrl: 'http://192.168.1.156:8088', // 接口请求地址
    // wsUrl: ['ws://192.168.1.156:8090/webSocket','ws://192.168.1.156:8088/webSocket'], // websocket地址。 后面不要/
    appName: 'ms-ui', // 名称
    version: 1 //版本 1智能识别 2本地rtmp 3本地video
}

document.title = window.Base.appName
