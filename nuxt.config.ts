// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "ar", name: "Arabic", file: "ar.json" },
    ],
    detectBrowserLanguage: false,
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      title: "Distretto Design",
      meta: [
        {
          name: "description",
          content:
            "Distretto Design creates stylish interiors and offers luxury furniture from top European brands. Since 2015, we have been designing unique spaces with elegance and creativity.",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
