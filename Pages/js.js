function accueil() {
    location.href = './index.html';
}
function accueil1() {
    location.href = '../index.html';
}
function produit() {
    location.href = './Pages/produits.html';
}
function produits() {
    location.href = './produits.html';
}
function menu(formulaire) {
    $("#contenu_generale").load('./Pages/'+formulaire+'.html');
}
function menu_produits(formulaire) {
    $("#contenu_generale").load('./Produits/'+formulaire+'.html');
}
function Apropos(formulaire) {
    $('#contenu_generale').load('./Pages/'+formulaire+'.html');
}
function Apropos1(formulaire) {
    $('#contenu_generale').load('./'+formulaire+'.html');
}
function Afficher(formulaire) {
	$('#contenu_generale').load('./views/' + formulaire + '.html');
	evenementTable();
}
function refresh(){
	var t = 1000; // rafraîchissement en millisecondes
	setTimeout('showDate(); evenementTable();', t)
};
function showDate() {
	var date = new Date()
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	if( h < 10 ){ h = '0' + h; }
	if( m < 10 ){ m = '0' + m; }
	if( s < 10 ){ s = '0' + s; }
	var time = h + ':' + m + ':' + s
	document.getElementById('heure').innerHTML = time;
	
	let date1=new Date().toLocaleDateString();
	document.getElementById('date').innerHTML = date1;
	refresh();
 };