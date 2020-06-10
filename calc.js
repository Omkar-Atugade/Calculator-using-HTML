function cal(x){
	document.getElementById('txt').value+=x;
}

function clr(){
	document.getElementById('txt').value='';
}

function del(){
	document.getElementById('txt').value=document.getElementById('txt').value.substring(0,document.getElementById('txt').value.length-1);
}

function rt(){
	document.getElementById('txt').value=Math.sqrt(document.getElementById('txt').value);
}

function result(){
	document.getElementById('txt').value=eval(document.getElementById('txt').value);
	}