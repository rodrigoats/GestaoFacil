/**
 * 
 */

angular.module("gestaofacil").filter("formatarNumero", function($filter){
	return function(input){
		var valor = $filter('currency')(input);
		return valor.split('$')[1];
	}
});
