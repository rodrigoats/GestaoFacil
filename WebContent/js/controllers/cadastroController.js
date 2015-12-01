/**
 * 
 */

angular.module('gestaofacil', []).controller('cadastroController',function($scope, lancamentoAPI){
	
	$scope.title = "Gestão Fácil";
	$scope.ok = false;
	
	$(function(){
		 var options = new Array();
		 options['language'] = 'pt-BR';
		 $('#dataLancamento').datepicker(options);
		});
	
	
	lancamentoAPI.getClassificacao().success(function(data) {
		$scope.classificacoes = data;
	});

	lancamentoAPI.getPlanoDeContas().success(function(data) {
		$scope.planosdecontas = data;
	});
		
	
	$scope.adicionarLancamento = function(lancamento){
		lancamentoAPI.saveLancamento(lancamento).success(function(data) {
			
			$scope.formLancamento.$setPristine();
			delete $scope.lancamento;
			$scope.ok = true;
		});
		
	};
	
});