import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //for dev mode
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  alias: {
    wrappers: fileURLToPath(new URL("./wrappers", import.meta.url)),
    components: fileURLToPath(new URL("./components", import.meta.url)),
    routes: fileURLToPath(new URL("./utils/routes", import.meta.url)),
  },
  css: [
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/scss/main.scss",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
  modules: ["nuxt-icon"],
});
