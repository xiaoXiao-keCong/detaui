const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')

const installTsTplReplacer = (listFileContent) => {
	// 设置输入输出路径
	const installFileFrom = './.template/install.ts.tpl'
	const installFileTo = '../../packages/index.ts'

	// 读取模板内容
	const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8')

	// 根据传入的信息构造数据
	const installMeta = {
		importPlugins: listFileContent.map(({ compName }) => `import { ${compName}InstallPlugin } from './${compName}';`).join('\n'),
		installPlugins: listFileContent.map(({ compName }) => `${compName}InstallPlugin.install?.(app);`).join('\n    '),
		exportPlugins: listFileContent.map(({ compName }) => `export * from './${compName}'`).join('\n'),
	}

	// 使用 handlebars 替换模板内容
	const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)

	// 渲染模板并输出至指定目录
	fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
		if (err) console.log(err)
	})
}
mkdirp(filePath, err => {
	if (err) {
	  console.error(err);
	  return resolve();
	}

	const data = {
	  kebabCaseName: name,
	  camelCaseName: firstUpperCase(getCamelCase(name)),
	  lang,
	  scoped: scoped ? ' scoped' : '',
	};
	const tplPath = path.join(__dirname, '../templates');
	const tpls = [
	  { source: 'vue.tpl', dest: `${name}.vue` },
	  { source: 'index.tpl', dest: 'index.js' },
	];

	tpls.forEach(({ source, dest }) => {
	  tplApply.tpl_apply(
		path.join(tplPath, source),
		data,
		path.join(filePath, dest),
	  );
	});

	message.success(`generate ${filePath} success`);
	resolve();
  });