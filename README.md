# FATEC Profº Jessen Vidal, SJC - 3º Semestre ADS

# Atividade 5- Programação Orientada a Objeto

O objetivo final é criar uma aplicação web, na abordagem SPA, que atenda a todos os requisitos que o sistema precisa ter, para atender aos clientes da WB. Os requisitos foram descritos na atvi, a primeira atividade que deu origem a empresa de desenvolvimento de software. Busque os requisitos na documentação da atvi.


# Equipe De Desenvolvimento 

Nome            | GitHub                                                       | Linkedin |
 |-----------------|--------------------------------------------------------------|----------|
| André Ribeiro   | <a href="https://github.com/New-Tomorrow" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/andre-ramos-ribeiro-320621226/" target="_blank">Link</a>| |
| Dionísio Leão   | <a href="https://github.com/dsslleagion" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/dionisio-samuel-dos-santos-le%C3%A3o-616848226/" target="_blank">Link</a>|
<br>

# Para executar uma aplicação

É necessário instalar o MYSQL Workbench.

-Após a instalação:

```
Clique na conexão "Local instance"
Na aba Server, clique em Data Import
Em seguida, clique no checkbox Import from Self-Contained File
importe o arquivo wb_banco
Em Default Target Schema, crie um novo schema chamado "wb_banco".
Clique na aba "Import Progress", e por fim "Start Import"
```
Para executar a aplicação, certifique-se de ter instalado o NodeJs em seu computador:

 - Faça o clone do repositório:
 ```
git clone https://github.com/dsslleagion/Listas_POO.git
```
Na pasta raiz do projeto, digite:
```
git checkout AtvV
```
- Na pasta Backend/Conexao, no arquivo conexao.js, mude a senha para a mesma senha que você cadastrou no seu Workbench para o usuário root, e em seguida, abra dois terminais dentro do projeto com VScode e execute o seguinte comando para executar:
```
para a pasta front abra um terminal unico
cd front
npm start

para a pasta Backend abra um terminal unico
cd Backend
npm start

```




