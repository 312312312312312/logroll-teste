let categoriaAtual = "div_transportador_correia";


function trocarCategoria(categoria){
  

    $('#' + categoriaAtual).fadeOut(200);
    setTimeout(function(){
        $('#' + categoria).fadeIn(500);
    },200);

    categoriaAtual = categoria;
}


$(document).ready(function(){
    $("#div_transportador_correia").fadeIn(1000);
    

});
