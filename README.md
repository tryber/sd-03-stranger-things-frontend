# Boas vindas ao repositório frontend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de frontend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do frontend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-03-stranger-things) em que os requisitos do projeto são destrinchados.

############ COMANDOS UTILIZADOS ##############

Primeiro foi criado o Heroku App utilizando o comando:
**heroku create cardosolucas1-st-frontend --buildpack mars/create-react-app**;

Em seguida foram setadas as variáveis de ambiente, e logo após isso, foi feito o primeiro push para a Master do Heroku App
**git push heroku cardoso-stranger-things-frontend:master**
onde cardoso-stranger-things-frontend seria a branch local;

A partir deste ponto, para o requisito bônus, foi necessário criar um novo App Heroku a partir do mesmo código:
**heroku create cardosolucas1-st-frontend-prod --buildpack mars/create-react-app**
Este que seria para o ambiente de produção;

Após isso, foi criado o ambiente de produção, renomeando o remote do Heroku
**heroku git:remote -a cardosolucas1-st-frontend-prod**

Logo depois de setar a variável de desenvolvimento que permite a diferenciação do ambiente, é feito o push para a segunda aplicação:
**git push heroku cardoso-stranger-things-frontend:master**


