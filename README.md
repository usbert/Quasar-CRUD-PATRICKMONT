# INSTALL QUASAR CLI

√ What would you like to build? » App with Quasar CLI, let's go!
√ Project folder: ... quasar-project
√ Pick Quasar version: » Quasar v2 (Vue 3 | latest and greatest)
√ Pick script type: » Typescript
√ Pick Quasar App CLI variant: » Quasar App CLI with Vite
√ Package name: ... app-quasar1
√ Project product name: (must start with letter if building mobile apps) ... Teste 1
√ Project description: ... A Quasar Project
√ Author: ... Marcelo Usbertm <usbert@gmail.com>
√ Pick a Vue component style: » Composition API
√ Pick your CSS preprocessor: » Sass with SCSS syntax
√ Check the features needed for your project: » ESLint, State Management (Pinia), Axios
√ Pick an ESLint preset: » Prettier

Install project dependencies? (recommended) » Yes, use npm

# INSTALL VUE

npm init vue@latest

    √ Project name: ... vue-app1
    √ Add TypeScript? ... No
    √ Add JSX Support? ... No
    √ Add Vue Router for Single Page Application development? ... Yes
    √ Add Pinia for state management? ... Yes
    √ Add Vitest for Unit Testing? ... No
    √ Add an End-to-End Testing Solution? » No
    √ Add ESLint for code quality? ... Yes
    √ Add Prettier for code formatting? ... Yes

    cd vue-app1
    npm install
    npm run format
    npm run dev

# Notes

- Criar componente
  npx quasar new componet -f ts-compsoition [NOME DO COMPONENTE]

Organizar API (axios.ts)



AJUSTAR EM quasar.config
NOTIFICAÇÕES COM DIALOG
    plugins: [
      'Notify',
      'Dialog'
    ],


1) CRIANDO COMPOSABLE E SERVICES
https://www.youtube.com/watch?v=waaoGxiMESc

SALVANDO E EDITANDO FORMULÁRIOS (parte 1)
https://www.youtube.com/watch?v=CPBbYr8b1jM


# Teste 1 (app-quasar1)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
