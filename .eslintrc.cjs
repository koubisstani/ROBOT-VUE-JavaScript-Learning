/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 使用vue中的prettier
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        semi: false, // 无分号
        printWidth: 80, // 每行代码最多80字符
        trailingComma: 'none', //不加对象|数组最后逗号
        endOfLine: 'auto' // 换行符号
      }
    ],
    // eslint
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // 忽略views视图上的单个单词名字的文件报错
      }
    ],
    'vue/no-setup-props-destructure': ['off'], // 关闭props解构的校验（因为props解构会丢失响应式，所以vue会阻止解构，但是后面我们可以使得响应式不丢失）
    'no-under': 'error' // 没有声明直接使用报错
  }
}
