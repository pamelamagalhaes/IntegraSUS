var tbTriagem = localStorage.getItem("tbTriagem");// Recupera os dados armazenados
tbTriagem = JSON.parse(tbTriagem); // Converte string para objeto

if (tbTriagem == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbTriagem = [];

text_append = "";
for (var i in tbTriagem) {
    var paciente = JSON.parse(tbTriagem[i]);
    
    if (paciente.Status == "Emergência"){
        css_block = "course-preview";
    } else if (paciente.Status == "Muito Urgente"){
        css_block = "course-preview";
    } else if (paciente.Status == "Urgente"){
        css_block = "course-preview2";
    } else if (paciente.Status == "Pouco Urgente"){
        css_block = "course-preview2";
    } else if (paciente.Status == "Não Urgente"){
        css_block = "course-preview3";
    } else {
        css_block = "course-preview";
    }
    
    text_append = text_append + 
    "<div class=\"courses-container\">" +
        "<div class=\"course-d\">" +
            "<div class=\"" + css_block + "\">" +
                "<h6>PACIENTE</h6>" + 
                "<h2> " + paciente.Nome + " </h2>" + 
                "<a href=\"#\">TRIAGEM<i class=\"fas fa-chevron-right\"></i></a>" + 
            "</div>" +
            "<div class=\"course-info\">" + 
                "<div class=\"progress-container\">" +
                    "<div class=\"progress\"></div>" +
                    "<span class=\"progress-text\">" +
                        "1/3 Atendimento" +
                    "</span>" +
                "</div>" +
                "<h6> " + paciente.Time + " </h6>" +
                "<h2> " + paciente.Status + " </h2>" +
                "<button class=\"btn\"" +
                    "style=\"background-color:#2d7a8a;border-radius:10px;color:white\">Continuar</button>" +
            "</div>" +
        "</div>" +
    "</div>";
}

tbTriagemView.innerHTML = text_append

