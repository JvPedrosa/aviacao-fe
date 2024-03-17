# Projeto de Front-end de Aviação com TypeScript

Guia passo a passo para configurar e iniciar o projeto de front-end de aviação usando React e TypeScript.

## Passos para Configuração do Projeto

### 1. Inicialização do Projeto

Crie o diretório do projeto e inicialize um projeto Node.js com npm.

```bash
mkdir aviacao-fe
cd aviacao-fe
npm init -y
```

### 2. Instalação do TypeScript

Instale o TypeScript como uma dependência de desenvolvimento no projeto.

```bash
npm install typescript --save-dev
```

### 3. Configuração do TypeScript

Inicialize um projeto TypeScript para criar um arquivo de configuração padrão `tsconfig.json`.

```bash
npx tsc --init
```

### 4. Criação da Aplicação React com TypeScript

Agora, crie um novo projeto React com suporte a TypeScript usando o comando `create-react-app`.

```bash
npx create-react-app . --template typescript
```

Note que utilizando o ponto (`.`) no comando acima criamos o aplicativo no diretório atual em vez de criar uma nova pasta.

### 5. Execução da Aplicação

Após a instalação e criação da aplicação, podemos iniciar o servidor de desenvolvimento.

```bash
npm start
```

Isso irá iniciar o projeto React, e você poderá acessar a aplicação pelo navegador no endereço `http://localhost:3000`.
