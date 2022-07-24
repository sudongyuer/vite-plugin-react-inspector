
<p align="center">
<a href="https://github.com/sudongyuer/vite-plugin-vue-inspector"><img src="https://git.poker/sudongyuer/image-bed/blob/master/vite-plugin-react-inspector.png?raw=true" width='200'/></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/vite-plugin-react-inspector" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/vite-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/vite-plugin-react-inspector" alt="NPM Downloads" /></a>
  <a href="https://github.com/sudongyuer/vite-plugin-react-inspector/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/sudongyuer/vite-plugin-react-inspector" alt="License" /></a>
</p>

<p align="center">
<a href="https://stackblitz.com/edit/vitejs-vite-1mazom?file=src/App.tsx"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

## 👀 Why 
When developing a React app, you have a lot of components in your app. Sometimes you may forget where the code is located that you want to edit. Then you need this plugin to help you find the code, just click the dom in the browser and this plugin can help you to open the editor and find the code.


## 📖 Introduction
This vite plugin allows users to jump to local IDE code directly from browser React component by just a simple click, which is similar to Chrome inspector but more advanced.

## 🌈 Features

- Support react 16
- Support react 17
- Support react 18
- All features out of box just need add this plugin in vite.config.ts


<p align="center">
<img src="https://git.poker/sudongyuer/image-bed/blob/master/20220724/vite-plugin-react-inspector.gif?raw=true" alt="vite-plugin-vue-inspector">
</p>

## 📦 Installation

```bash
# pnpm 
pnpm add vite-plugin-react-inspector -D

# yarn
yarn add vite-plugin-react-inspector -D

# npm
npm install vite-plugin-react-inspector -D
```

## 🦄 Usage

### Configuration `vite.config.ts`

```ts
// ❗️this plugin must before react

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactInspector from 'vite-plugin-react-inspector'

export default defineConfig({
  plugins: [
    ReactInspector(),
    react(),
  ],
})
```

### Example

- [React17](https://github.com/sudongyuer/vite-plugin-react-inspector/tree/master/packages/project-react-17)
- [React18](https://github.com/sudongyuer/vite-plugin-react-inspector/tree/master/packages/project-react-18)

## 🔌  Configuration IDE / Editor

It uses an **environment variable** named **`REACT_EDITOR`** to specify an IDE application, but if you do not set this variable, it will try to open a common IDE that you have open or installed once it is certified.

For example, if you want it always open VSCode when inspection clicked, set `export REACT_EDITOR=code` in your shell.


### VSCode

- install VSCode command line tools, [see the official docs](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
  ![install-vscode-cli](https://git.poker/sudongyuer/image-bed/blob/master/vscode-setup.png?raw=true)

- set env to shell, like `.bashrc` or `.zshrc`  

  ```bash
  export REACT_EDITOR=code
  ```


### WebStorm  

- just set env with an absolute path to shell, like `.bashrc` or `.zshrc` (only MacOS)  

  ```bash
  export REACT_EDITOR='/Applications/WebStorm.app/Contents/MacOS/webstorm'
  ```

**OR**

- install WebStorm command line tools

- then set env to shell, like `.bashrc` or `.zshrc`  

  ```bash
  export REACT_EDITOR=webstorm
  ```


### Vim

Yes! you can also use vim if you want, just set env to shell

```bash
export REACT_EDITOR=vim
```

## 🌸 Credits

This project is inspired by [vite-plugin-vue-inspector](https://github.com/webfansplz/vite-plugin-vue-inspector) .

Partially implementation is inspired by [vite-plugin-svelte-inspector](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte/src/ui/inspector) .

## 👦 Author

sudongyuer email:976499226@qq.com

## ❤️ Thanks Contribution

- [geekris1](https://github.com/geekris1)

## 📄 License

[MIT](./LICENSE) License © 2022 [SuDongYu](https://github.com/sudongyuer)
