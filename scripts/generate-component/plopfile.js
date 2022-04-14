// const routerGenerator = require('./');
const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

module.exports = function (plop) {

	plop.setGenerator('自动生成新的组件', {
		description: '生成组件',
		prompts: [
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

		],
		actions: data => {
			console.log(data)
			data.compClassName = `Deta${data.compName}`
			data.regisiterCompName = `${kebabCase(data.compName)}`
			const comp = {
				"compName": data.compName,
				"compZhName":  data.compZhName,
				"compDesc":  data.compDesc,
				"compClassName": data.compClassName,
				"regisiterCompName": data.regisiterCompName
			}

			// const name = '{{data}}'
			const actions = [
				{
					type: 'add',
					path: `../../packages/${data.compName}/index.tsx`,
					templateFile: './.template/index.hbs',
					data: {
						data:comp
					}
				},
				{
					type: 'add',
					path: `../../packages/${data.compName}/src/index.tsx`,
					templateFile: './.template/src/index.hbs',
					data: {
						data: comp
					}
				},
				{
					type: 'add',
					path: `../../packages/${data.compName}/src/types/I${data.compClassName}.d.ts`,
					templateFile: './.template/src/types/types.d.ts.hbs',
					data: {
						data: comp

					}
				},

				{
					type: 'append',
					path: `../../packages/index.ts`,
					pattern: /(\/\/ -- APPEND HERE --)/gi,
					templateFile: './.template/main.hbs',
					data: {
						data: comp
					}
				},
				// 修改 list。json
				{
					type: 'modify',
					path: `../../packages/list.json`,
					partten: /}\n*]/gi,
					unique: true,
					transform(params) {
						console.log(params)
						const json = JSON.parse(params)
						json.push(data)
						return JSON.stringify(json, null, '	')
					},
					// templateFile: './.template/listJson.hbs',

				},
				{
					type: 'add',
					path: `../../src/docs/${data.regisiterCompName}.md`,
					templateFile: './.template/docs/doc.hbs',
					data: {
						data: comp

					}
				},
			]
			return actions
		}
	})
}

