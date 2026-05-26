import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// 自定义插件：构建完成后复制 index.html 为 404.html
const copy404Plugin = () => ({
  name: "copy-404",
  closeBundle: () => {
    const distIndex = path.resolve(__dirname, "dist/index.html");
    const dist404 = path.resolve(__dirname, "dist/404.html");
    if (fs.existsSync(distIndex)) {
      fs.copyFileSync(distIndex, dist404);
      console.log("✅ 已自动生成 404.html");
    }
  },
});

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), copy404Plugin()],  // 添加自定义插件
    base: "/qianzhangxun-website/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@locales": path.resolve(__dirname, "./src/locales"),
        "@router": path.resolve(__dirname, "./src/router"),
      },
    },
    server: {
      port: 3000,
      open: true,
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_API_TARGET || "http://localhost:3001",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy, options) => {
            proxy.on("error", (err, req, res) => {
              console.log("[Proxy Error]", err);
            });
            proxy.on("proxyReq", (proxyReq, req, res) => {
              console.log("[Proxy Request]", req.method, req.url);
            });
            proxy.on("proxyRes", (proxyRes, req, res) => {
              console.log("[Proxy Response]", proxyRes.statusCode, req.url);
            });
          },
        },
        "/mock": {
          target: "http://localhost:3001",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mock/, "/mock"),
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: mode === "development",
      minify: mode === "production",
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": [
              "react",
              "react-dom",
              "react-redux",
              "@reduxjs/toolkit",
            ],
            "router-vendor": ["react-router-dom"],
            "form-vendor": ["formik", "yup"],
            "i18n-vendor": [
              "i18next",
              "react-i18next",
              "i18next-browser-languagedetector",
            ],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "@/styles/variables.css";`,
        },
      },
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-redux",
        "@reduxjs/toolkit",
        "react-router-dom",
      ],
    },
  };
});