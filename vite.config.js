import vue from "@vitejs/plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import externalGlobals from "rollup-plugin-external-globals";

// 全局对象
const globals = externalGlobals({
  vue: "Vue",
  vuex: "Vuex",
  vueRouter: "VueRouter",
})
export default {
  plugins: [
    vue(),
    commonjs(),
    globals
  ],
  build: {
    rollupOptions: {
      external: ['vue', 'vuex', 'vueRouter' ],
      plugins: [
        commonjs(),
        globals
      ],
    },
  },
};