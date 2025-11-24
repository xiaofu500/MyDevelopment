import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import importSortPlugin from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import VueEslintParser from "vue-eslint-parser";
export default [
  {
    files: ["*.{js,jsx,ts,tsx,vue}"],
    // 配置语言选项
    languageOptions: {
      // 配置全局变量
      globals: {
        ...globals.browser,
        ...globals.node,
        defineEmits: "readonly",
        defineProps: "readonly",
        defineExpose: "readonly",
        computed: "readonly",
        defineOptions: "readonly",
        defineModel: "readonly",
        defineSlots: "readonly",
        defineInject: "readonly",
        ref: "readonly",
        onMounted: "readonly",
        onBeforeMount: "readonly",
        onUnmounted: "readonly",
        onBeforeUnmount: "readonly",
        shallowRef: "readonly",
        onActivated: "readonly",
        onDeactivated: "readonly",
        toRefs: "readonly",
        watch: "readonly",
        onError: "readonly",
        onRenderTracked: "readonly",
        onRenderTriggered: "readonly",
        watchEffect: "readonly",
      },
    },
  },
  {
    // 对 Vue 文件进行 lint 检查
    files: ["*.{js,jsx,ts,tsx,vue}"],
    rules: {  // ✅ 这里之前缺少逗号
      ...js.configs.recommended.rules,
      ...pluginVue.configs['flat/recommended'].rules,
      'no-unused-vars': 'error',
      'no-undef': 'warn',
      'no-console': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'vue/valid-define-emits': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },  // ✅ 添加了逗号
    languageOptions: {
      // 使用 VueEslintParser 解析 Vue 文件
      parser: VueEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        // 解析 Vue 文件时，使用 TypeScript 解析器
        extraFileExtensions: [".vue"],
        parser: typescriptParser,
      },
    },
    plugins: {  // ✅ 这里之前缺少逗号
      vue: pluginVue,
      "simple-import-sort": importSortPlugin,
    },  // ✅ 添加了逗号
  }
]