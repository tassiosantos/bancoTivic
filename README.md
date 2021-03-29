# bancoTivic
Para esse projeto foram utilizados:

No front:
Angular CLI 11.2.6 (Node 14.16.0)

No back:
Spring Boot 2.4.4 (Maven Project, Java 11)
DB H2


Entendimento do problema:
    O banco necessita exibir os dados da conta do cliente.
    O banco necessita realizar transações de depósito e saque da conta do cliente.

Criação da solução:
    Considerando a não obrigatoriedade de cadastros de clientes:
        Foi criada uma tela de cadastro simples.
        O cadastro do cliente direciona para o cadastro da conta.
    Considerando as operações obrigatórias da conta:
        O cadastro da conta não pode vir sem o cadastro do cliente.
        Não foram criadas outras operações, por existirem muitas possibilidades sem direcionamento específico.

    Considerações gerais:
        Não existe a chance de cadastro de conta sem um cadastro prévio do cliente, assim como não existe o cadastro
        do cliente sem a obrigatoriedade da abertura da conta.
        Por existir apenas um único tipo de conta, cada cliente só pode ter uma única conta.
        Por não existir a necessidade de login, uma lista dos clientes cadastrados será exibida na tela inicial. Ao se
        acessar um item da lista aparecerá a conta do cliente com os dados do cliente e da conta (Nome, Número da conta) e os botões para realização das operações de Saldo, Saque, Depósito.



Estrutura do código:
    O banco é gerido pela classe BrancoTivicApplicatio.java (o main do projeto). Essa classe irá gerir a interação do usuário para a criação e acesso de objetos de outras classes.
    O cliente é gerido pela classe Client.java, com os dados de nome, id, numero da conta.
    A conta é gerida pela classe Account.java, com os dados de número da conta e saldo.

    O front-end consome a api que envia para a tela inicial o nome do cliente, cpf e número da conta e na tela da conta envia os dados do cliente e da conta.

Observações:
    Por ser um sistema com um cadastro fechado e definido, foram vetadas as possibilidades de cadastro sem todos os elementos preenchidos. Por conta disso, não houve a necessidade de criação de mais de um construtor para cada classe.
    Os campos vazios foram filtrados no front-end, não havendo chamada de funções caso algum campo não esteja preenchido.

    As funções, set.Id, set.Name, set.Account foram criadas mas não serão utilizadas por não haver a necessidade de atualização dos dados do usuário.



O Back-End funcionou como esperado, com o CRUD funcional. O framework Spring-Boot ajuda muito por ser intuitivo e prático.
O Front-End teve problemas com algumas limitações. O framework Angular tem muitas versões e uma sintax que muda muito de algumas versões mais antigas para as atuais. A montagem foi feita parcial, mas a comunicação com o DB foi feita de forma satisfatória, se conseguindo recuperar qualquer dado do banco de dados.
As regras de negócios das funções requisitadas não puderam ser concluídas por conta da dificuldade com a sintaxe do framework e problemas com importações e utilização de elementos importados. 



Por ser uma questão de prática comum, o código foi escrito majoritariamente em inglês.
