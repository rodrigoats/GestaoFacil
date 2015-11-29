/**
 * 
 */

var gestaofacil = angular.module('gestaofacil', ['datatables']);

gestaofacil.controller('lancamentoController', function lancamentoController(
		$scope, lancamentoAPI, graficoService) {

	
	$scope.title = "Gestão Fácil";
	lancamentoAPI.getClassificacao().success(function(data) {
		$scope.classificacoes = data;
	});

	lancamentoAPI.getPlanoDeContas().success(function(data) {
		$scope.planosdecontas = data;
	});
	
	$scope.mostrarMes = function(mes){

			lancamentoAPI.getLancamentosByMonth(mes).success(function(data){
				$scope.total = 0;
				$scope.totalDespesas = 0;
				$scope.totalReceitas = 0;
				
				$scope.lancamentos = data;
				$scope.arrDespesas = lancamentoAPI.getTotalDespesasPorMes($scope.lancamentos);
				$scope.arrReceitas = lancamentoAPI.getTotalReceitasPorMes($scope.lancamentos);
				$scope.totalDespesas = $scope.arrDespesas.reduce(function(anterior,atual){return anterior+atual});
				$scope.totalReceitas = $scope.arrReceitas.reduce(function(anterior,atual){return anterior+atual});
				$scope.total = lancamentoAPI.totalLancamento($scope.lancamentos);
				
				$scope.classeAcumulado = $scope.total > 0 ? "panel-green": "panel-red";
			});
			
	}
	
	lancamentoAPI.getLancamentos().success(
			function(data, status, headers, config) {
					$scope.lancamentos = null;
					$scope.total = null;
					$scope.arrDespesas = null;
					$scope.arrReceitas = null;
					$scope.totalDespesas = null;
					$scope.totalReceitas = null;
					
					$scope.lancamentos = data;
					$scope.total = lancamentoAPI.totalLancamento($scope.lancamentos);
					$scope.arrDespesas = lancamentoAPI.getTotalDespesasPorMes($scope.lancamentos);
					$scope.arrReceitas = lancamentoAPI.getTotalReceitasPorMes($scope.lancamentos);
					$scope.totalDespesas = $scope.arrDespesas.reduce(function(anterior,atual){return anterior+atual});
					$scope.totalReceitas = $scope.arrReceitas.reduce(function(anterior,atual){return anterior+atual});;
					$scope.classeAcumulado = $scope.total > 0 ? "panel-green": "panel-red";
					
					graficoService.getGraficoRecDesp($scope.arrReceitas, $scope.arrDespesas);
					graficoService.getGraficoDonutReceitas($scope.lancamentos);
					
					
					 var contasReceber = lancamentoAPI.getTotalContasReceberPorMes($scope.lancamentos);
					 Morris.Bar({
					        element: 'contasreceber-chart',
					        data: [{
					            y: 'JAN',
					            a: contasReceber[0],
					        }, {
					            y: 'FEV',
					            a: contasReceber[1],
					        },{
					            y: 'MAR',
					            a: contasReceber[2],
					        },{
					            y: 'ABR',
					            a: contasReceber[3],
					        },{
					            y: 'MAI',
					            a: contasReceber[4],
					        },{
					            y: 'JUN',
					            a: contasReceber[5],
					        },{
					            y: 'JUL',
					            a: contasReceber[6],
					        },{
					            y: 'AGO',
					            a: contasReceber[7],
					        }, {
					            y: 'SET',
					            a: contasReceber[8],
					        },{
					            y: 'OUT',
					            a: contasReceber[9],
					        },{
					            y: 'NOV',
					            a: contasReceber[10],
					        }, {
					            y: 'DEZ',
					            a: contasReceber[11],
					        }],
					        xkey: 'y',
					        ykeys: ['a'],
					        labels: ['Contas à Receber'],
					        hideHover: true,
					        barColors: ['green'],
					        resize: true
					    });
					 var contasPagar = lancamentoAPI.getTotalContasPagarPorMes($scope.lancamentos);
					 Morris.Bar({
					        element: 'contaspagar-chart',
					        data: [{
					            y: 'JAN',
					            b: contasPagar[0]
					        }, {
					            y: 'FEV',
					            b: contasPagar[1]
					        },{
					            y: 'MAR',
					            b: contasPagar[2]
					        },{
					            y: 'ABR',
					            b: contasPagar[3]
					        },{
					            y: 'MAI',
					            b: contasPagar[4]
					        },{
					            y: 'JUN',
					            b: contasPagar[5]
					        },{
					            y: 'JUL',
					            b: contasPagar[6]
					        },{
					            y: 'AGO',
					            b: contasPagar[7]
					        }, {
					            y: 'SET',
					            b: contasPagar[8]
					        },{
					            y: 'OUT',
					            b: contasPagar[9]
					        },{
					            y: 'NOV',
					            b: contasPagar[10]
					        }, {
					            y: 'DEZ',
					            b: contasPagar[11]
					        }],
					        xkey: 'y',
					        ykeys: ['b'],
					        labels: ['Contas à Pagar'],
					        hideHover: true,
					        barColors: ['red'],
					        resize: true
					    });
					
				});
	
	
	$scope.adicionarLancamento = function(lancamento){
		lancamentoAPI.saveLancamento(lancamento).success(function(data) {
			
			$scope.formLancamento.$setPristine();
			delete $scope.lancamento;
		});
		
	};
	
	$scope.pagarLancamento = function(lancamento){
		lancamento.pago = !lancamento.pago;
		lancamentoAPI.editLancamento(lancamento).success(function(data) {
			
		});
		
	};
	
	$scope.removerLancamento = function(lancamento){
		lancamentoAPI.removeLancamento(lancamento).success(function(data){
			$scope.lancamentos.push(angular.copy(lancamento));
			delete $scope.lancamento;
		});
	};
	
	$(function(){
		 var options = new Array();
		 options['language'] = 'pt-BR';
		 var optionsMes = new Array();
		 optionsMes['format'] = 'mm-yyyy';
		 optionsMes['startView'] = 'months';
		 optionsMes['minViewMode'] = 'months';
		 $('#dataLancamento').datepicker(options);
		 $('#mesAno').datepicker(optionsMes);
		 $('#mesAno').datepicker('update', '');
		})
		
		
	$('a.page-scroll').bind('click', function(e){$
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
			}, 1250, 'easeInOutExpo');
		e.preventDefault();
	});
	 
});
