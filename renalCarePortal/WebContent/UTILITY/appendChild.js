/**
 * http://usejsdoc.org/
 */
function appendChild( data, tag ){
	var node = document.createElement("LI");
	var textnode = document.createTextNode( data );
	node.appendChild( textnode );
	document.getElementById( tag ).appendChild(node);
}
function myFunction(){
	console.log("triggered");
}
