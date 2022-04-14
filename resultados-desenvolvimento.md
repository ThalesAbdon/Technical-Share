# Detalhamento dos resultados de desenvolvimento da Squad-4

<ol>
        <li> <a href="#desing-interface">Implementação do desing da interface</a></li>
        <li> <a href="#calendario">Calendário</a> </li>
        <li> <a href="#chat">Chat</a> </li>
        <li> <a href="#autenticacao"> Autenticação </a> </li>
</ol>

<h2 id="desing-interface">Implementação do desing da interface</h2>

<h2 id="calendario">Calendário Funcional</h2>
Para a criação do calendário utilizamos a biblioteca react-calendar e sua estilização é resultado de um trabalho manual, mudando totalmente a cara do que se parece o calendário de forma nativa. O calendário está pré-setado para identificar o dia atual e não aceitar agendamentos em dias anteriores a este, e setamos também para que não seja possível agendar mentoria em períodos superiores a 30 dias.

<h2 id="chat">Chat</h2>
Depois que possibilitamos o usuário a fazer um agendamento, é necessário a comunicação entre o mentor e o mentorado foi dai que surgiu a ideia de
implementar um chat. O nosso chat foi construido usando <a href="https://socket.iotarget="_blank">Socket.io</a> que é uma biblioteca JavaScript orientada a eventos para aplicativos da Web em tempo real. 
 O Socket.io permite a comunicação bidirecional em tempo real entre clientes e servidores da Web. Lembrando que os chats são privados( usamos o id do horário como id da room)
e assim apenas o mentor e o mentorado possuem acesso ao chat. Infelizmente por falta de tempo e conhecimento, não consegui fazer com que as mensagens enviadas fossem armazenadas
( ou seja, o nosso chat possui acoplamento temporal mas desacoplado espacialmente) o que torna necessário que ambos(mentor e mentorado) estejam online no chat.

<h2 id="autenticacao">Autenticação </h2>

