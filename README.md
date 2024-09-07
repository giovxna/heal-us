<img src="https://github.com/giovxna/heal-us/blob/main/public/assets/images/capa-heal-us.png">

<p align="center">
Crie rotinas saudáveis com a ajuda de IA e cuide do seu bem-estar preventivamente!
</p>

<p align="center">
  <a href="#"><strong>Documentação</strong></a> ·
  <a href="#"><strong>Aplicação</strong></a> 
</p>       

<hr>

### Sobre  
**HealUs** é uma plataforma de saúde preventiva que utiliza inteligência artificial avançada para analisar hábitos de vida, como alimentação, sono e atividades físicas, oferecendo recomendações personalizadas para promover bem-estar e prevenir problemas de saúde futuros. A plataforma permite que os usuários façam perguntas e interajam com a IA, de maneira semelhante a assistentes de conversa, como o ChatGPT, mas com foco em saúde personalizada e preventiva.

### Contexto do Projeto  
O projeto foi criado para oferecer uma solução de saúde focada na prevenção, integrando a IA para análise de dados individuais e respostas personalizadas. A ideia é fornecer um suporte contínuo, proativo e ajustado ao estilo de vida dos usuários, combinando **engenharia de prompt** e dados de saúde.

O projeto foi criado como entrega do desafio proposto durante a imersão de IA com o Google Gemini promovida pela Alura e pelo Google.

### Contexto Negocial  
O **HealUs** responde à crescente demanda por soluções de saúde digital que priorizam a prevenção e o monitoramento de hábitos, diferenciando-se de buscas genéricas na internet, como o Google, ao fornecer recomendações específicas com base em dados individuais e interações mais profundas. Ele ajuda empresas de saúde, seguradoras e usuários finais a melhorar a qualidade de vida e reduzir custos com saúde por meio de mudanças de comportamento.

### Aplicação  
A aplicação possui uma interface intuitiva que permite que o usuário faça perguntas sobre sua saúde e receba respostas e recomendações imediatas, oferecendo sugestões personalizadas ao longo do tempo para manter o bem-estar. 

- **Frontend:** O frontend é responsável por capturar a entrada do usuário (pergunta relacionada à saúde), enviar a solicitação para a API Gemini, e exibir a resposta na interface do usuário.
- **Backend:** O backend armazena a chave da API em um arquivo `.env` e a fornece ao frontend através de uma rota dedicada. Isso permite que a chave seja mantida segura, evitando a exposição direta no código frontend.
- **Integração com a API Gemini:** O sistema envia um prompt com instruções específicas para a IA HealUs e recebe uma resposta, que é apresentada ao usuário.

### Tecnologias

   - **HTML5**
   - **CSS3**
   - **JavaScript**
   - **Fetch API**
   - **Node.js**
   - **Express.js**
   - **dotenv**
   - **Gemini API**
   - **.env**

