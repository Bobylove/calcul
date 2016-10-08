$('.boutton').click(function(){
        var boutton = $(this).val();
        var result = $("#op").val();
        var add = result + boutton ;
        $("#op").val(boutton);
        $("#op").val(result);
        $("#op").val(add);
console.log(add)
        if(boutton == "=")
        {
         $('#op').html();       
        } else {
                add += boutton;
        }



});




/* ('#boutton0').click(function(){
        console.log('0');
});
$('#boutton1').click(function(){
        console.log('1');
});
$('#boutton2').click(function(){
        console.log('2');
});
$('#boutton3').click(function(){
        console.log('3');
});
$('#boutton4').click(function(){
        console.log('4');
});
$('#boutton5').click(function(){
        console.log('5');
});
$('#boutton6').click(function(){
        console.log('6');
});
$('#boutton7').click(function(){
        console.log('7');
});
$('#boutton8').click(function(){
        console.log('8');
});
$('#boutton9').click(function(){
        console.log('9');
});
});
$('#boutton11').click(function(){
        console.log('-');
});
$('#boutton12').click(function(){
        console.log('*');
});
$('#boutton13').click(function(){
        console.log('/');
});
$('#boutton14').click(function(){
        console.log('=');
});

$('#result').text(function(){
console.log();
}) */ 