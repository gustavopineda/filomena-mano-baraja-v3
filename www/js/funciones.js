var i = 1;
var j = 1;
var l = 3;
var control;

function home(){
	location.reload();
}

function animar(){
	control = setInterval(rep,150);
	if(i == 1){
		document.getElementById("audios").play();
	}
}

function rep(){
	ocultarTodo();	
	document.getElementById(i).style.display="block";							
	i++;

	if(i==9 && j==4){
		clearInterval(control);
	}
	else if(i==9 && j<=3){
		i	=	1;
		j++;
	}
	else if(i==10){
		clearInterval(control);
	}
	else if(i==16){
		clearInterval(control);
		control = setInterval(rep,600);
		if(l != 0){
			i = 14;
			l--;
		}
	}
	else if(i==17){
		clearInterval(control);
		control = setInterval(rep,150);
	}
	else if(i==38){
		clearInterval(control);
	}
	else if(i==44){
		clearInterval(control);
		control = setInterval(rep,600);
		if(l != 2){
			i = 42;
			l++;
		}
	}
	else if(i==45){
		clearInterval(control);
		control = setInterval(rep,150);
	}
	else if(i==66){
		clearInterval(control);
	}
}

function ocultarTodo(){
	for(k=1; k<=66; k++){
		document.getElementById(k).style.display="none";	
	}
}