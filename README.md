### My Store

Projeto da página inicial de um marketplace, desenvolvido utilizando NextJS. Neste projeto, utilizei as bibliotecas Radix UI e Phospor Icons e para o ambiente de desenvolvimento, o Prettier, para manter o código padronizado. Evitei utilizar muitas bibliotecas externas, devido ao escopo menos complexo do projeto, optando assim por utilizar mais do poder do HTML semântico, do CSS puro - com o postCSS default do Next - e dos próprios recursos do React/NextJS - Server Actions, Suspense API, Custom Hooks e etc.

A página possui tema claro/escuro baseado no sistema do usuário, layout responsivo e além disso, também utiliza da estratégia de Progressive Enhancement, com a ajuda das Server Actions do NextJS, que permite que a página consiga realizar a operação de busca, mesmo que o JavaScript esteja desabilitado - ou ainda não tenha sido baixado.

Utilizei o Route Handlers do Next para criar rotas de API e assim simular um consumo de dados real - na API eu simplesmente consumo o JSON com os dados mockados.

> [!IMPORTANT]
> A API utiliza a porta padrão - 3000 -, se estiver utilizando outra, mude a rota do fetch no componente `ProductList`.
