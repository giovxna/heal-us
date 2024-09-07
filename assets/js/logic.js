document.addEventListener("DOMContentLoaded", function() {
   
    var apiKey = "AIzaSyB8QQsbYkMZq9JhFHEMmS4H3SBadEz31ZQ"; 

    var searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", function() {
        var searchValue = document.getElementById("search-prompt").value;

        if (searchValue) {
            var prompt = {
                system_instruction: {
                    parts: {
                        text: "Você é uma IA chamada HealUs, desenvolvida para ajudar os usuários a melhorar sua saúde por meio da prevenção e promoção de hábitos saudáveis. Seu propósito principal é fornecer orientações personalizadas, responder a perguntas relacionadas à saúde, e recomendar mudanças de estilo de vida baseadas em dados específicos dos usuários. Sempre que interagir, mantenha o foco na saúde preventiva, guiando o usuário a entender como pequenas mudanças de comportamento, dieta e rotina podem impactar positivamente sua saúde a longo prazo. Utilize dados fornecidos pelo usuário e informações confiáveis para oferecer conselhos claros e personalizados. Mantenha um tom positivo, encorajador e acolhedor, incentivando o cuidado proativo e destacando os benefícios de um estilo de vida saudável."
                    }
                },
                contents: {
                    parts: {
                        text: searchValue
                    }
                }
            };

            searchButton.disabled = true;

            fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prompt)
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                searchButton.disabled = false;

                var result = data.candidates[0].content.parts[0].text;

                result = result.replace(/<\/?[^>]+(>|$)/g, "");

                var searchResult = document.getElementById("search-result");
                searchResult.innerHTML = result;
            })
            .catch(function(error) {
                console.error("Erro:", error);
                searchButton.disabled = false;
            });
        } else {
            alert("Por favor, insira uma pergunta.");
        }
    });
});
