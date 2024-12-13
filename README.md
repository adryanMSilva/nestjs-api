# NestJS API

Este projeto é uma API desenvolvida com o [NestJS](https://nestjs.com/), um framework progressivo para Node.js que facilita a construção de aplicações server-side eficientes e escaláveis.

## Descrição

A API fornece endpoints para operações CRUD (Criar, Ler, Atualizar, Deletar) em recursos específicos, utilizando o NestJS para estruturar o código de forma modular e organizada.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/adryanMSilva/nestjs-api.git
   ```

2. **Instale as dependências:**

   ```bash
   cd nestjs-api
   npm install
   ```

## Configuração

Antes de iniciar a aplicação, configure a variável de ambiente necessária. Crie um arquivo `.env` na raiz do projeto e defina a seguinte variável:

```
DATABASE_URL="mysql://seuUsuario:senha@urlDoBancoDeDados/nomeDoDatabase"
```

Substitua os valores acima pelas informações correspondentes ao seu ambiente de banco de dados.

## Executando a Aplicação

Para iniciar a aplicação, utilize um dos seguintes comandos:

- **Modo de desenvolvimento:**

  ```bash
  npm run start
  ```

- **Modo de desenvolvimento com hot-reload:**

  ```bash
  npm run start:dev
  ```

- **Modo de produção:**

  ```bash
  npm run start:prod
  ```

A aplicação estará disponível em `http://localhost:3000`.


## Documentação

A documentação dos endpoints da API pode ser acessada em `http://localhost:3000/swagger` após iniciar a aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor

- [@adryanMSilva](https://www.github.com/adryanMSilva)
