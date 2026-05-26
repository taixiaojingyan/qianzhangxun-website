// 代理配置文件 - 用于不同环境的API代理
const proxyConfig = {
  development: {
    // 开发环境代理配置
    "/api": {
      target: "http://localhost:3001",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
      logLevel: "debug",
      onProxyReq: (proxyReq, req, res) => {
        console.log(`[Proxy] ${req.method} ${req.url} -> ${proxyReq.path}`);
      },
    },
    "/mock": {
      target: "http://localhost:3001",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/mock/, "/mock"),
    },
    "/uploads": {
      target: "http://localhost:3001/uploads",
      changeOrigin: true,
    },
  },
  test: {
    // 测试环境代理配置
    "/api": {
      target: "https://test-api.qianzhangxun.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
  production: {
    // 生产环境代理配置
    "/api": {
      target: "https://api.qianzhangxun.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};

// 获取当前环境的代理配置
export const getProxyConfig = (mode = "development") => {
  return proxyConfig[mode] || proxyConfig.development;
};

export default proxyConfig;
