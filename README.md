------

Projeto inicial para aprender conceitos básicos do React e tecnologias relacionadas voltado aos Hooks

------

O que aprendi com cada conceito escrito com minhas palavras:

**UseState:**  
Serve pra criar e controlar um estado. Ou seja, quando efetuamos uma alteração em um dado, pra que ele seja atualizado em tela, passamos o retorno dele dentro deste hook,
pra que seja renderizado novamente. Dessa forma Se eu crio um usuário pro exemplo, e abaixo eu tenho uma lista de usuários, passo ele como valor do useState, e quando eu
fazer uma criação de usuário, a tabela será atualizada em tela.

Dentro dele eu passo um valor de estado, uma função que atualiza o valor e o estado inicial.

Esse hook em específico sinto que é o que mais dominei, talvez por ter usado muito.


**UseEffect:**
De acordo com meu entendimento este hook serve para executar um chamado, que não seria só renderizar na tela, como por exemplo uma requisição no banco ou alguma chamada de API.

Dentro dele eu passo o código a rodar depois da renderização, e posso passar um array de dependências, que define quando o useEffect será chamado. 

Pelo que compreendo ele sempre roda se estiver sem array, assim que o componente renderiza, se estiver com um array vazio ele roda uma vez, se estiver com uma variável ele roda sempre que a variável mudar.


**UseRef:**
Esse aqui guarda valores sem causar re-renderização. Ele também é usado pra acessar os elementos do DOM (aproveitei pra dar uma analisada nisso, vi que o DOM é basicamente a árvore de todo o HTML). 

Logo, quando referenciamos alguma coisa pra acessar sem causar re-renderização, usamos o useRef.


**UseContext:**
Esse aqui é um hook que serve pra compartilhar dados entre componentes sem ter que passar esses dados via props manualmente.

Pelo que compreendi, preciso criar um contexto, que é um objeto que contém o valor que quero compartilhar, e um provider que é o que vai fornecer o valor. Esse provider eu coloco superior a navegação e ele pode ser acessado nos componentes. 

No meu caso, eu criei um conexto que altera o usuário, dessa forma, sempre que eu altero o usuário na tela, se eu voltar ao menu e acessar a página dois de contexts, ele vai mostrar o usuário alterado.


**UseReducer:** 
Pelo que entendi ele serve para gerenciar estados igual o useState, a diferença é que ele é usado quando são muitos dados dependentes uns dos outros, é uma alternativa pra otimizar o código (isso é o que compreendi em meus estudos, fique a vontade pra me corrigir).

Na estrutura dele, vai ser passado algo bem parecido com o useState, mas ele vai ter uma função reducer que vai receber o estado atual e o que precisa ser feito, 
retornando o novo estado.


**UseCallback:**
Esse aqui serve pra memorizar uma função, pra que ela não seja recriada quando o componente renderizar, todas as vezes. Um exemplo pelo que entendi, é uma lista de dados, que quando há uma função, tipo de acrescentar um valor, pode ser usado ele.

**UseMemo:**
Esse aqui, pelo que entendi também, pode trabalhar com o UseCallback, ele memoriza os valores, enquanto o UseCallback memoriza a função.

Ou seja, dessa forma pelo que entendi, ele vai guardando a última informação, pra não recriar tudo quando chamada a função de novo.

**UseImperativeHandle:**
Esse aqui, o que eu entendi, é que ele serve pra definir o que pode ser acessado dentro de um componente. Dessa forma o componente que eu uso pra acessar outro componente, pode ser limitado a não poder alguma função específica.