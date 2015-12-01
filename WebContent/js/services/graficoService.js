/**
 * 
 */
angular.module('gestaofacil').factory('graficoService', function($http, $filter){
	
	var _getGraficoRecDesp = function(arrReceitas, arrDespesas){
		
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
	            a: $filter('formatarNumero')(arrReceitas[10]),
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
	        preUnits: 'R$ ',
	        resize: true
	    });
	    
		var ano = '2015';
		
		var totalReceitas = arrReceitas.reduce(function(anterior, atual){return anterior + atual});
		var totalDespesas = arrDespesas.reduce(function(anterior, atual){return anterior + atual});

		var color = totalReceitas - totalDespesas > 0 ? 'green': 'red';
		
		Morris.Area({
	        element: 'morris-area-chart',
	        data: [{
	            period:  ano + '-01',
	            receita: arrReceitas[0] == 0 ? null : arrReceitas[0],
	            despesa: arrDespesas[0] == 0 ? null : arrDespesas[0],
	            lucro: arrReceitas[0] - arrDespesas[0] == 0 ? null : arrReceitas[0] - arrDespesas[0]
	        },{
	            period:  ano + '-02',
	            receita: arrReceitas[1] == 0 ? null : arrReceitas[1],
	            despesa: arrDespesas[1] == 0 ? null : arrDespesas[1],
	    	    lucro: arrReceitas[1] - arrDespesas[1] == 0 ? null : arrReceitas[1] - arrDespesas[1]
	        },{
	            period:  ano + '-03',
	            receita: arrReceitas[2] == 0 ? null : arrReceitas[2],
	            despesa: arrDespesas[2] == 0 ? null : arrDespesas[2],
	    	    lucro: arrReceitas[2] - arrDespesas[2] == 0 ? null : arrReceitas[2] - arrDespesas[2]
	        },{
	            period:  ano + '-04',
	            receita: arrReceitas[3] == 0 ? null : arrReceitas[3],
	    	    despesa: arrDespesas[3] == 0 ? null : arrDespesas[3],
	    	    lucro: arrReceitas[3] - arrDespesas[3] == 0 ? null : arrReceitas[3] - arrDespesas[3]
	        },{
	            period:  ano + '-05',
	            receita: arrReceitas[4] == 0 ? null : arrReceitas[4],
	    	    despesa: arrDespesas[4] == 0 ? null : arrDespesas[4],
	    	    lucro: arrReceitas[4] - arrDespesas[4] == 0 ? null : arrReceitas[4] - arrDespesas[4]
	        },{
	            period:  ano + '-06',
	            receita: arrReceitas[5] == 0 ? null : arrReceitas[5],
	    	    despesa: arrDespesas[5] == 0 ? null : arrDespesas[5],
	    	    lucro: arrReceitas[5] - arrDespesas[5] == 0 ? null : arrReceitas[5] - arrDespesas[5]
	        },{
	            period:  ano + '-05',
	            receita: arrReceitas[6] == 0 ? null : arrReceitas[6],
	    	    despesa: arrDespesas[6] == 0 ? null : arrDespesas[6],
	    	    lucro: arrReceitas[6] - arrDespesas[6] == 0 ? null : arrReceitas[6] - arrDespesas[6]
	        },{
	            period:  ano + '-08',
	            receita: arrReceitas[7],
	            despesa: arrDespesas[7],
	            lucro: arrReceitas[7] - arrDespesas[7] 
	        },{
	            period:  ano + '-09',
	            receita: arrReceitas[8],
	            despesa: arrDespesas[8],
	            lucro: arrReceitas[8] - arrDespesas[8] 
	        },{
	            period:  ano + '-10',
	            receita: arrReceitas[9],
	            despesa: arrDespesas[9],
	            lucro: arrReceitas[9] - arrDespesas[9] 
	        },{
	            period:  ano + '-11',
	            receita: arrReceitas[10] == 0 ? null : arrReceitas[10],
	    	    despesa: arrDespesas[10] == 0 ? null : arrDespesas[10],
	    	    lucro: arrReceitas[10] - arrDespesas[10] == 0 ? null : arrReceitas[10] - arrDespesas[10]
	        },
	        {
	            period:  ano + '-12',
	            receita: arrReceitas[11] == 0 ? null : arrReceitas[11],
	    	    despesa: arrDespesas[11] == 0 ? null : arrDespesas[11],
	    	    lucro: arrReceitas[11] - arrDespesas[11] == 0 ? null : arrReceitas[11] - arrDespesas[11]
	        }],
	        xkey: 'period',
	        ykeys: ['lucro'],
	        labels: ['Lucro'],
	        lineColors: [color,'blue','green','red'],
	        xlabels: "month",
	        fillOpacity: 0.0,
	        resize: true
	    });
	}
	
	var _getGraficoDonutReceitas = function(){
		
		$http.get('http://localhost:8080/GestaoFacil/ws/grafico/donutReceitas').success(function(data){
//		$http.get('http://gestaofacil-rodrigoats.rhcloud.com/GestaoFacil/ws/grafico/donutReceitas').success(function(data){
			
			receitas = [];
			
			for (var int = 0; int < data.length; int++) {
				
				receitas[int] = {label : data[int].id, value : data[int].valor}
			}
			
			Morris.Donut({
				element: 'morris-donut-chart',
				data: receitas,
				formatter : function(y, data){return $filter('currency')(y)},
				resize: true
			});
		});
	}
	
	return {
		getGraficoDonutReceitas: _getGraficoDonutReceitas,
		getGraficoRecDesp: _getGraficoRecDesp 
		};
});