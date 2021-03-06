/**
 * 
 */
angular.module('gestaofacil').factory('graficoService', function(){
	
	var _getGraficoRecDesp = function(arrReceitas, arrDespesas){
		console.log("Grafico RecDesp");
		
		Morris.Bar({
	        element: 'morris-bar-chart',
	        data: [{
	            y: 'JAN',
	            a: arrReceitas[0],
	            b: arrDespesas[0]
	        }, {
	            y: 'FEV',
	            a: arrReceitas[1],
	            b: arrDespesas[1]
	        },{
	            y: 'MAR',
	            a: arrReceitas[2],
	            b: arrDespesas[2]
	        },{
	            y: 'ABR',
	            a: arrReceitas[3],
	            b: arrDespesas[3]
	        },{
	            y: 'MAI',
	            a: arrReceitas[4],
	            b: arrDespesas[4]
	        },{
	            y: 'JUN',
	            a: arrReceitas[5],
	            b: arrDespesas[5]
	        },{
	            y: 'JUL',
	            a: arrReceitas[6],
	            b: arrDespesas[6]
	        },{
	            y: 'AGO',
	            a: arrReceitas[7],
	            b: arrDespesas[7]
	        }, {
	            y: 'SET',
	            a: arrReceitas[8],
	            b: arrDespesas[8]
	        },{
	            y: 'OUT',
	            a: arrReceitas[9],
	            b: arrDespesas[9]
	        },{
	            y: 'NOV',
	            a: arrReceitas[10],
	            b: arrDespesas[10]
	        }, {
	            y: 'DEZ',
	            a: arrReceitas[11],
	            b: arrDespesas[11]
	        }],
	        xkey: 'y',
	        ykeys: ['a', 'b'],
	        labels: ['Receitas', 'Despesas'],
	        hideHover: true,
	        barColors: ['green','red'],
	        resize: true
	    });
	}
	
	var _getGraficoDonutReceitas = function(lancamentos){
		
		var receitas = [];
		for(var int = 0; int < lancamentos.length; int++){
			if(lancamentos[int].classificacao.descricao == 'RECEITA'){
					receitas[int] = {'planodecontas' : lancamentos[int].planodecontas.descricao, 'valor' : lancamentos[int].valor};
			}
		}
		
		console.log(receitas);
		
		Morris.Donut({
	        element: 'morris-donut-chart',
	        data: [{
	            label: "Download Sales",
	            value: 12
	        }, {
	            label: "In-Store Sales",
	            value: 30
	        }, {
	            label: "Mail-Order Sales",
	            value: 20
	        }],
	        resize: true
	    });
	}
	
	
	return {
		getGraficoDonutReceitas: _getGraficoDonutReceitas,
		getGraficoRecDesp: _getGraficoRecDesp 
		};
	
	
});