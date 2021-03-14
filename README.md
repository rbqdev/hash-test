<h1 align="center"> Hash Teste Front-end - Calculadora de Antecipação</h1>

<p align="center">Calculadora para antecipação de recebimentos</p>

## Tecnologias ultilizadas

As seguintes ferramentas foram usadas na construção do projeto:

* [React](https://reactjs.org/) - UI framework requerido pelo teste
* [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton#readme) - Componentes react para loading animados, criando um efeito interessante ao usuário
* [React Icons](https://react-icons.github.io/react-icons/) - Repositório com grande variedade de icons em svg, e com possibilidade de importar somente o necessário
* [Typescript](https://www.typescriptlang.org/) - Superset essencial para o JS/React para adicionar tipagem estática, melhorar o intellisense e prevenir erros de indefinições no código.
* [Styled Components](https://styled-components.com/) - CSS in JS
* [Polished](https://polished.js.org/) - Toolset para o CSS, possibilitando coisas como variações das cores definidas no tema default.
* [Jest](https://jestjs.io/) - Testes unitários
* [Testing Library](https://testing-library.com/) - Testes unitários com foco no usuário
* [Cypress](https://www.cypress.io/) - Testes end-to-end
* [Storybook](https://storybook.js.org/) - Documentação e visualização individual dos componentes, possibilitando ver as variações dos componentes.


## Features do projeto
- [x] Simulação de Antecipação
- [x] Períodos de recebimento configuráveis
- [x] Simulação de erros da api
- [x] Dark Theme
- [x] Responsivo

## Demo
Você pode ver a demonstração do projeto aqui: [Link da Demo](https://hash-test-app.netlify.app/)

## Como rodar a aplicação em modo de desenvolvimento

### Pré requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório
$ git clone <https://github.com/rbqdev/hash-test.git>
```

### Configurando as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

| Variável       | Obrigatório? | Tipo  | Descrição |       
| ------------- |:-------------:|:-------------:| -------------|
| `REACT_APP_API_BASE_URL`     | Sim | `string` | Url da api |
| `SKIP_PREFLIGHT_CHECK`      | Sim  | `boolean` | Para prevenir erros envolvendo o babel loader impedindo o start do storybook ou até mesmo do proprio server |

Para todos os comandos a seguir, será preciso que você esteja dentro da pasta do projeto:
```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd hash-test
```

### Rodando o projeto
```bash
# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento com o comando
$ yarn start
```

### Rodando os testes: Unitários
```bash
# Para rodar os testes
$ yarn test:unit

# Para ver a cobertura de testes
$ yarn test:unit:coverage
```
### Rodando os testes: End-to-End
```bash
$ yarn test:e2e
```
### Rodando o Storybook
```bash
$ yarn storybook
```

## Simulações do projeto

Você deve acessar o projeto passando determinados parâmetros para poder executar algumas simulações.

OBS: Para as simulações do projeto, a abordagem escolhida foi ultilizar parâmetros na url, pois não tinha algo específico no layout que pudesse justificar outras simulações alem da funcionalidade principal.


### Simulando periodos configuráveis:

Ex: `https://hash-test-app.netlify.app/?customDays=[1,100,200]`
 
Caso o parâmetro esteja inválido devido algum caractere ou erro de configuração dos valores, será retornado para o usuário os périodos padrões: `[1, 15, 30, 90]`

### Simulando Timeout:

Ex: `https://hash-test-app.netlify.app/?timeout`

Após entrar na página com o parâmetro, execute o formulário

### Simulando Internal Server Error:

Ex: `https://hash-test-app.netlify.app/?internalError`

Após entrar na página com o parâmetro, execute o formulário

### Simulando Delay de resposta:

Ex: `https://hash-test-app.netlify.app/?delay=tempoEmMilissegundos`

Após entrar na página com o parâmetro, execute o formulário

### Simulando app offline:

Inspecione o app, vá na aba `network` e coloque a opção de internet como `offline`

## Licença

MIT License

Copyright (c) 2021 Robson Braga de Queiroz 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

