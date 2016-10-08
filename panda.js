function iLove(panda, tendance){
	if(tendance === 'amour') {
		alert("J'aime les panda" + " " + panda + " " + " ils sont trop kawai !");
		$("#hh").css("color", "purple");
	} else if (tendance === 'haine') {
		alert('je hais les pandas' + " " + panda + " " + 'alors ouvre ta console!')
		$("#hh").css("color", "red");
	}
	else if(tendance === 'amour2'){
		alert("trop chou les pandas" + " " + panda + " " + " je les kiff de ouf !")
		$("#hh").css("color", "orange");
	} else {
		alert('what ?!');
		$("#hh").css("color", "white");
	}

}

$(".panda").click(function(){
	var pandaType = $(this).data('type');
	var tendance = $(this).data('tendance');
	iLove(pandaType, tendance);
	
});
