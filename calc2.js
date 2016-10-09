    $('.boutton').click(function(){
        var boutton = $(this).val();
        var resulta = $("#op").val();
        var add1 = resulta + boutton ;
        $("#op").val(add1);
    });
    $('.bouttonEgal').click(function(){
        egal();
    });
    function egal(){
        var valeur = $("#op").val();
        var resultatFinal = eval(valeur);
        $("#op").val(resultatFinal)
    }
    $('.reset').click(function(){
        reset1();
    });
    function reset1(){
        $("#op").val("");
    }

