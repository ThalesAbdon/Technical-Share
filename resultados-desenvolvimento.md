# Detalhamento dos resultados de desenvolvimento da Squad-4

<ol>
        <li> <a href="#desing-interface">Implementação do desing da interface</a></li>
        <li> <a href="#calendario">Calendário</a> </li>
        <li> <a href="#chat">Chat</a> </li>
        <li> <a href="#autenticacao"> Autenticação </a> </li>
</ol>

<h2 id="desing-interface">Implementação do desing da interface</h2>

A implementação desing da interface seguiu o que foi proposto pela equipe de UX, a partir da visualização do [protótipo](https://www.figma.com/proto/9CpoO8F625SYSWxvDMV1Gk/wireframe-web?node-id=2%3A397&scaling=contain&page-id=2%3A397&starting-point-node-id=481%3A1240) feito no Figma. Para isso, foi utilizado HTML,CSS e BOOTSTRAP dentro da aplicação em React. Como a maioria das páginas obedece um padrão(possuem header e footer) decidimos implementá-las separadamente assim como outros componentes.

<h2 id="calendario">Calendário Funcional</h2>
Para a criação do calendário utilizamos a biblioteca react-calendar e sua estilização é resultado de um trabalho manual, mudando totalmente a cara do que se parece o calendário de forma nativa. O calendário está pré-setado para identificar o dia atual e não aceitar agendamentos em dias anteriores a este, e setamos também para que não seja possível agendar mentoria em períodos superiores a 30 dias.

![alt](https://github.com/ThalesAbdon/Technical-Share/blob/main/images/Calendar-1.png)

<h2 id="chat">Chat</h2>
Depois que possibilitamos o usuário a fazer um agendamento, é necessário a comunicação entre o mentor e o mentorado foi dai que surgiu a ideia de
implementar um chat. O nosso chat foi construido usando <a href="https://socket.io">Socket.io</a> que é uma biblioteca JavaScript orientada a eventos para aplicativos da Web em tempo real. 
 O Socket.io permite a comunicação bidirecional em tempo real entre clientes e servidores da Web. Lembrando que os chats são privados( usamos o id do horário como id da room)
e assim apenas o mentor e o mentorado possuem acesso ao chat. Infelizmente por falta de tempo e conhecimento, não consegui fazer com que as mensagens enviadas fossem armazenadas
( ou seja, o nosso chat possui acoplamento temporal mas desacoplado espacialmente) o que torna necessário que ambos(mentor e mentorado) estejam online no chat.

![alt](https://github.com/ThalesAbdon/Technical-Share/blob/main/images/Chat-1.png)
![alt](https://github.com/ThalesAbdon/Technical-Share/blob/main/images/Chat-2.png)
![alt](https://github.com/ThalesAbdon/Technical-Share/blob/main/images/Chat-3.png)

<h2 id="autenticacao">Autenticação </h2>
Implementação do processo de autenticação e o token é gerado no back-end usando JSON Web Token (JWT). No React, chamamos o end-point Login e passamos as credenciais corretas de usuário e senha, o back-end retorna um token e através do localStorage setamos o token no navegador. OBS: existe um expiresIn que faz o token expirar em um determinado tempo, foi setado: 1600 como padrão.

![alt](https://github.com/ThalesAbdon/Technical-Share/blob/main/images/Auth-1.png)
