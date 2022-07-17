import { defineExportConfig } from 'vite-plugin-hot-export'

export default defineExportConfig({
  configs: [
    {
      targetDir: './src/svgs/',
      customImport: (fileName, file) => {
        return `import { ReactComponent as Svg${fileName} } from './${file}'`
      },
    },
    {
      targetDir: './src/images/',
      autoPrefix: true,
    },
  ],
})
