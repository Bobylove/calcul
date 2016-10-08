$('.boutton').click(function(){
    var boutton = $(this).val();
    var resulta = $("#op").val();
    var add1 = resulta + boutton ;
    $("#op").val(add1);
    console.log(add1)
});
    $('.bouttonEgal').click(function(){
    egal();
    });
function egal(){
    var valeur = $("#op").val();
    var resultatFinal = eval(valeur);
    $("#op").val(valeur + " = " + resultatFinal)
}
