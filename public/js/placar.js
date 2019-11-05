$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar(){
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Vinicius";
  var numbPalavras = $("#contador-palavras").text();


  var linha = novaLinha(usuario,numbPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);
  $(".placar").slideDown(500);
  scrollPlacar();
}

function scrollPlacar(){
 var posicaoPlacar = $(".placar").offset().top;
 $("body").animate({
   scrollTop: posicaoPlacar+"px"
 },1000);
}

function novaLinha(usuario,palavras){
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").attr("href","#").addClass("botao-remover");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  // Icone dentro do <a>
  link.append(icone);

  // <a> dentro do <td>
  colunaRemover.append(link);

  // Os três <td> dentro do <tr>
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha(){
  event.preventDefault();
  var linha = $(this).parent().parent();
  linha.fadeOut();
  setTimeout(function(){
    linha.remove();
  },1000);
}

function mostraPlacar(){
  $(".placar").stop().slideToggle(700);
}

function sincronizaPlacar(){
  
  
}