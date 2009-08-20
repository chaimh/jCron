function Obj(object){
	//alert(object.class);
	object.construct();
	
	
	
	this.construct = function(){
		
		alert('woo');
		
	};
	
	this.construct();
	window.onUnload = object.destructor();
}