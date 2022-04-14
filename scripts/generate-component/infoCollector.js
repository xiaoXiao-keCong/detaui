const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve } = require('path')

const listFilePath = '../../packages/list.json'

// FooBar --> foo-bar
const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

module.exports = async () => {
  const meta = await inquirer
    .prompt([
      {
        type: 'input',
        message: '请输入你要新建的组件名（纯英文，大写开头）：',
        name: 'compName',
        default: 'Test'
      },
      {
        type: 'input',
        message: '请输入你要新建的组件名（中文）：',
        name: 'compZhName',
        default: '测试'
      },
      {
        type: 'input',
        message: '请输入组件的功能描述：',
        name: 'compDesc',
        default: '默认：这是一个新组件'
      }
    ])
  const { compName } = meta
  meta.compClassName = `Deta${compName}`
  return meta
}