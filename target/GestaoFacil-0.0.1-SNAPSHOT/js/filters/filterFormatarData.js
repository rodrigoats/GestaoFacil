/**
 * 
 */

angular.module('gestaofacil').filter('formatarData',function (){
	return function(input){
		var data = new Date(input);
		if(data.getDate() && data.getMonth() && data.getFullYear()){
			return data.getDate()+"/"+(data.getMonth() + 1)+"/"+data.getFullYear();
		}
		return "";
	}
});