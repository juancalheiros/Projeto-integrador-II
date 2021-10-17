# Bem-vindo ao app validate-credit-card

Este projeto é uma aplicação React que tem o objetivo de verificar se a sequência numerica de um cartão de credito é valida.

Para ser feito essa verificação, usa-se o algoritmo de luhn,
[Luhn_algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm), esse algoritmo é de dominio público e é usado por todos os credores de credito.

Conforme for sendo inserido os dados do cartão a aplicação irá lhe exibir o resultado de sua validação, isso também aplica para o cvv e data de validade do cartão.

Está aplicação obiviamente não armazena nenhum dado em banco nem se comunica com qualquer API, apenas verifica se a sequência é valida, caso tenha receio pode testar com esses numeros:
```
7992 7398 7100 0004
0000 0000 0000 0000
1234 5678 9031 2345
1111 1111 1111 1125
5465 0321 4654 6544
```

Obs: O cvv e a data de expiração pode ser qualquer valor.
## Dependências 

Docker: 20.10.8

ou

Node: 16.5.0

## Rodando local

* Se tiver o docker instalado 

    `make run-docker`

* Caso tenha apenas o node

    `make setup`

    `make run`

Depois de rodar os comando acesse [http://localhost:3000](http://localhost:3000)
## Testes
`make test`

## Lint
`make lint`

## Docker
* Fazer o build e run local

    `make build-run-docker`

* Exibir os container

    `make container-docker`

* Exibir as images

    `make images-docker`

* Pegar o ID da imagem

    `make id-image-docker`

* Removendo volumes
    
    `make down-docker`

* Limpar a imagem docker desta aplicação

    `make clear-image-docker`

* Limpar tudo (image e container desta aplicação)

    `make clear-all-docker`
