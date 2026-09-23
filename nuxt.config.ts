import tailwindcss from "@tailwindcss/vite";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: "zh-CN",
      },
      title: "贝瑞医疗 · 核医学场所建设一站式服务",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content:
            "贝瑞医疗为您提供核医学场所建设全生命周期闭环解决方案，从选址规划、设计施工到环评验收、设备供应及7×24小时运维。",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${baseURL.replace(/\/$/, "")}/favicon.ico`,
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  devServer: {
    port: 4000,
  },

  modules: ["nuxt-icons"],
});