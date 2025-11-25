"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _js = _interopRequireDefault(require("@eslint/js"));

var _parser = _interopRequireDefault(require("@typescript-eslint/parser"));

var _eslintPluginSimpleImportSort = _interopRequireDefault(require("eslint-plugin-simple-import-sort"));

var _eslintPluginVue = _interopRequireDefault(require("eslint-plugin-vue"));

var _globals = _interopRequireDefault(require("globals"));

var _vueEslintParser = _interopRequireDefault(require("vue-eslint-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = [{
  files: ["*.{js,jsx,ts,tsx,vue}"],
  // 配置语言选项
  languageOptions: {
    // 配置全局变量
    globals: _objectSpread({}, _globals["default"].browser, {}, _globals["default"].node, {
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
      watchEffect: "readonly"
    })
  }
}, {
  // 对 Vue 文件进行 lint 检查
  files: ["*.{js,jsx,ts,tsx,vue}"],
  rules: _objectSpread({}, _js["default"].configs.recommended.rules, {}, _eslintPluginVue["default"].configs['flat/recommended'].rules, {
    'no-unused-vars': 'error',
    'no-undef': 'warn',
    'no-console': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'vue/valid-define-emits': 'error',
    '@typescript-eslint/no-explicit-any': 'off'
  }),
  // ✅ 添加了逗号
  languageOptions: {
    // 使用 VueEslintParser 解析 Vue 文件
    parser: _vueEslintParser["default"],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
      // 解析 Vue 文件时，使用 TypeScript 解析器
      extraFileExtensions: [".vue"],
      parser: _parser["default"]
    }
  },
  plugins: {
    // ✅ 这里之前缺少逗号
    vue: _eslintPluginVue["default"],
    "simple-import-sort": _eslintPluginSimpleImportSort["default"]
  } // ✅ 添加了逗号

}];
exports["default"] = _default;