/**
 * 
 */

var gestaofacil = angular.module('gestaofacil', []);

gestaofacil.controller('graficosController', function graficosController(
		$scope, lancamentoAPI) {
	

		lancamentoAPI.getLancamentos().success(
			function(data) {
				
				$scope.lancamentos = data;
				var receitas = lancamentoAPI
						.getTotalReceitasPorMes($scope.lancamentos);
				var despesas = lancamentoAPI
						.getTotalDespesasPorMes($scope.lancamentos);
				
				var data = {
					labels : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril',
							'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
							'Outubro', 'Novembro', 'Dezembro' ],
					datasets : [ {
						label : "Receitas",
						fillColor : "rgba(50,205,50,1)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(220,220,220,1)",
						data : receitas
					}, {

						label : "Despesas",
						fillColor : "rgba(255,0,0,1)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(151,187,205,1)",
						data : despesas
					} ]
				};
				var options = {
					scaleBeginAtZero : true,
					scaleShowGridLines : true,
					scaleGridLineColor : "rgba(0,0,0,.05)",
					scaleGriLineWidth : 1,
					scaleShowHorizontalLines : true,
					scaleShowVerticalLines : true,
					barShowStroke : true,
					barStrokeWidth : true,
					barStrokeWidth : 2,
					barValueSpacing : 5,
					barDatasetSpacing : 1,
					responsive: true,

				};
				// var ctx = $('#resumoGeralChart').getContext('2d');
				var ctx = document.getElementById('resumoGeralChart')
						.getContext('2d');
				var resumoGeralChart = new Chart(ctx).Bar(data, options)
				
				//Só receita
				var dataReceita = {
					labels : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril',
							'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
							'Outubro', 'Novembro', 'Dezembro' ],
					datasets : [ {
						label : "Receitas",
						fillColor : "rgba(50,205,50,1)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(220,220,220,1)",
						data : receitas
					}]
				};
				var optionsReceita = {
					scaleBeginAtZero : true,
					scaleShowGridLines : true,
					scaleGridLineColor : "rgba(0,0,0,.05)",
					scaleGriLineWidth : 1,
					scaleShowHorizontalLines : true,
					scaleShowVerticalLines : true,
					barShowStroke : true,
					barStrokeWidth : true,
					barStrokeWidth : 2,
					barValueSpacing : 5,
					barDatasetSpacing : 1,
					responsive: true,

				};
				// var ctx = $('#resumoGeralChart').getContext('2d');
				var ctx = document.getElementById('receitasChart')
						.getContext('2d');
				var receitasChart = new Chart(ctx).Bar(dataReceita, optionsReceita);
				
				//Só despesas
				var dataDespesa = {
						labels : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril',
								'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
								'Outubro', 'Novembro', 'Dezembro' ],
						datasets : [ {
							label : "Despesas",
							fillColor : "rgba(255,0,0,1)",
							strokeColor : "rgba(151,187,205,1)",
							pointColor : "rgba(151,187,205,1)",
							pointStrokeColor : "#fff",
							pointHighlightFill : "#fff",
							pointHighlightStroke : "rgba(151,187,205,1)",
							data : despesas
						}]
					};
					var optionsDespesa = {
						scaleBeginAtZero : true,
						scaleShowGridLines : true,
						scaleGridLineColor : "rgba(0,0,0,.05)",
						scaleGriLineWidth : 1,
						scaleShowHorizontalLines : true,
						scaleShowVerticalLines : true,
						barShowStroke : true,
						barStrokeWidth : true,
						barStrokeWidth : 2,
						barValueSpacing : 5,
						barDatasetSpacing : 1,
						responsive: true,

					};
					var ctx = document.getElementById('despesasChart')
							.getContext('2d');
					var despesasChart = new Chart(ctx).Bar(dataDespesa, optionsDespesa);
					
					//Contas à Pagar
					
					var contasPagar = lancamentoAPI.getTotalContasPagarPorMes($scope.lancamentos);
					var dataDespesa = {
							labels : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril',
									'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
									'Outubro', 'Novembro', 'Dezembro' ],
							datasets : [ {
								label : "Despesas",
								fillColor : "rgba(255,0,0,1)",
								strokeColor : "rgba(151,187,205,1)",
								pointColor : "rgba(151,187,205,1)",
								pointStrokeColor : "#fff",
								pointHighlightFill : "#fff",
								pointHighlightStroke : "rgba(151,187,205,1)",
								data : contasPagar
							}]
						};
						var optionsDespesa = {
							scaleBeginAtZero : true,
							scaleShowGridLines : true,
							scaleGridLineColor : "rgba(0,0,0,.05)",
							scaleGriLineWidth : 1,
							scaleShowHorizontalLines : true,
							scaleShowVerticalLines : true,
							barShowStroke : true,
							barStrokeWidth : true,
							barStrokeWidth : 2,
							barValueSpacing : 5,
							barDatasetSpacing : 1,
							responsive: true,

						};
						var ctx = document.getElementById('contasPagarChart')
								.getContext('2d');
						var despesasChart = new Chart(ctx).Bar(dataDespesa, optionsDespesa);
						
						//Contas à Receber
						
						var contasReceber = lancamentoAPI.getTotalContasReceberPorMes($scope.lancamentos);
						var dataContasReceber = {
								labels : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril',
										'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
										'Outubro', 'Novembro', 'Dezembro' ],
								datasets : [ {
									label : "Contas à Receber",
									fillColor : "rgba(50,205,50,1)",
									strokeColor : "rgba(220,220,220,1)",
									pointColor : "rgba(220,220,220,1)",
									pointStrokeColor : "#fff",
									pointHighlightFill : "#fff",
									pointHighlightStroke : "rgba(220,220,220,1)",
									data : contasReceber
								}]
							};
							var optionsContasReceber = {
								scaleBeginAtZero : true,
								scaleShowGridLines : true,
								scaleGridLineColor : "rgba(0,0,0,.05)",
								scaleGriLineWidth : 1,
								scaleShowHorizontalLines : true,
								scaleShowVerticalLines : true,
								barShowStroke : true,
								barStrokeWidth : true,
								barStrokeWidth : 2,
								barValueSpacing : 5,
								barDatasetSpacing : 1,
								responsive: true,

							};
							var ctx = document.getElementById('contasReceberChart')
									.getContext('2d');
							var despesasChart = new Chart(ctx).Bar(dataContasReceber, optionsContasReceber);
						
							//Acumulado Receita e Despesa
							
							var dataAcumulado = {
									labels : [ 'Receitas', 'Despesas' ],
									datasets : [ {
										label : "Receitas",
										fillColor : "rgba(50,205,50,1)",
										strokeColor : "rgba(220,220,220,1)",
										pointColor : "rgba(220,220,220,1)",
										pointStrokeColor : "#fff",
										pointHighlightFill : "#fff",
										pointHighlightStroke : "rgba(220,220,220,1)",
										data : [receitas.reduce(function(anterior, atual){return anterior + atual}),null]
									}, {
										label : "Despesas",
										fillColor : "rgba(255,0,0,1)",
										strokeColor : "rgba(151,187,205,1)",
										pointColor : "rgba(151,187,205,1)",
										pointStrokeColor : "#fff",
										pointHighlightFill : "#fff",
										pointHighlightStroke : "rgba(151,187,205,1)",
										data : [null, despesas.reduce(function(anterior, atual){return anterior + atual})]
									}]
								};
								var optionsAcumulado = {
									scaleBeginAtZero : true,
									scaleShowGridLines : true,
									scaleGridLineColor : "rgba(0,0,0,.05)",
									scaleGriLineWidth : 1,
									scaleShowHorizontalLines : true,
									scaleShowVerticalLines : true,
									barShowStroke : true,
									barStrokeWidth : true,
									barStrokeWidth : 2,
									barValueSpacing : 1,
									barDatasetSpacing : 1,
									responsive: true,

								};
								var ctx = document.getElementById('acumuladoChart')
										.getContext('2d');
								var despesasChart = new Chart(ctx).Bar(dataAcumulado, optionsAcumulado);
			});
});