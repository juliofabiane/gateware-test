# Teste Pleno Front end

Utilizando o KnockoutJS, crie um novo módulo para adicionar os botões [+] e [-] para controle da quantidade desejada de cada produto no carrinho de compras.

Este botões devem incrementar e decrementar o campo de estoque do produto com as devidas validações de formato numérico e permitir apenas valores positivos.

## Instalação

Na pasta raiz da instalação do magento rodar os seguintes comandos:

```bash
composer config repositories.gateware/checkout vcs https://github.com/juliofabiane/gateware-test

composer require gateware/checkout:dev-master

php bin/magento setup:upgrade
```

