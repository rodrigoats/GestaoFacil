/**
 * 
 */

angular.module('gestaofacil').filter('formatarData',function (){
	return function(input){
		var data = new Date(input);
		var dia;
		var mes;
		var ano;
		if(data.getDate() < 10)
			dia = '0' + data.getDate();
		else
			dia = data.getDate();
		
		if(data.getMonth() < 10)
			mes = '0' + (data.getMonth() + 1);
		else
			mes = data.getMonth() + 1;
		
		ano = data.getFullYear();
		
		
		return dia+"/"+mes+"/"+ano;
	}
});