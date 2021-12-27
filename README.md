## NetflixClone

<img src="https://i.imgur.com/ahUHoWf.png">

<img src="https://i.imgur.com/JVqsBbC.png">

<img src="https://i.imgur.com/Fp1DRpm.png">

<h2>Projeto</h2>
<p>O projeto foi realizado com o intuíto de se aprofundar mais no React, melhorar os conhecimentos sobre BackEnd, Banco de Dados,
sobre responsividade, uso das boas práticas, melhoras os conhecimentos de html, css e javaScript, e fazer o uso de context API</p>
<br>
<p>O Projeto consiste em ser uma cópia da Netflix onde o usuário poderá criar sua conta, criar e editar os perfis, e selecionar para ter acesso
as séries e filmes da plataforma onde para conseguir os dados foi utilizada a API real TheMovieDB, assim o usário poderá ter acesso aos filmes mais
recentes e informações detalhadas deles</p>
<br>
<hr>
<br>
<h2>Como Testar</h2>
<ul>
  <h2>comandos</h2>
  <p>No repositório raiz do projeto execute os seguintes comanods</p>
  <li>npm run server</li>
  <p>antes de executar este comando inicie o mongodb usando o comando no terminar mongod</p>
  <p>o comando run server ira executar o servidor na porta 3001 usando o banco de dados mongodb</p>
  <li>npm start</li>
  <p>ira iniciar o projeto usando a porta padrão 3000</p>
</ul>
<br>
<hr>
<br>
<h2>Tecnologias Utilizadas</h2>
<ul>
  <h2>FrontEnd</h2>
  <li>ReactJS</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>ContextAPI</li>
  <li>Axios</li>
  <li>LocalStorage</li>
  <h2>BackEnd</h2>
  <li>MongoDb</li>
  <li>Express</li>
  <li>NodeJs</li>
  <li>Bcrypt</li>
  <li>Tokens</li>
</ul>
<br>
<hr>
<br>
<h2>Uso Das Tecnologias</h2>
<ul>
  <h2>ContextAPI</h2>
  <p>Para este projeto como precisava que informações do usuário que transitavam entre muitos componentes, por isso optei por utilizar o contextAPI para que os componentex pudessem utilizar os dados a partir de um ponto e como não eram muitas informações, optei por utiliza-lo ao invés do Redux</p>
  <h2>MongoDB</h2>
  <p>Banco de Dados utilizado para armazenar as informações dos usuários cadastrado</p>
  <h2>Bcrypt</h2>
  <p>Como neste projeto eu quis fazer um backend mais robusto e que tivesse um sistema de autenticação mais elaborado, optei de usar o bcypt que encripta a senha do usuário</p>
  <h2>Local Storage</h2>
  <p>Precisa de algumas informações salvas para que o usuário pudesse ao entrar na aplicação ja permanecesse logado, assim utilizei o localStorage para armazenar o token e o Id do usuário para assim que entrasse ja fosse feito o login automaticamente</p>
</ul>
<br>
<hr>


<br>
<br>
<p>Projeto ainda em Desenvolvimento.. (arrumando 
os detalhes)</p>