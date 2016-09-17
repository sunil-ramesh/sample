
function myfunction(){
	document.getElementById('demo').innerHTML='hello world';
}
function newfunction(){
	document.getElementById('new').innerHTML='hello world';
	myfunction()
}
newfunction()