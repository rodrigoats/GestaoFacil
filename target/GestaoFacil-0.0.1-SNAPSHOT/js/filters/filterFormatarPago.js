/**
 * 
 */

angular.module("gestaofacil").filter("formatarPago", function(){
	return function(input){
		if(input)
			return "Pago";
		else
			return "Não Pago";
	}
});