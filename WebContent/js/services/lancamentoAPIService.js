/**
 * 
 */

angular.module("gestaofacil").factory("lancamentoAPI", function($http){
	var _getLancamentos = function(){
//		return $http.get("http://gestaofacil-rodrigoats.rhcloud.com//GestaoFacil/ws/lancamento/");
		return $http.get("http://localhost:8080/GestaoFacil/ws/lancamento/");
	}
	
	var _getLancamentosByMonth = function(mes){
		return $http.get("http://localhost:8080/GestaoFacil/ws/lancamento/" + mes);
	}
	var _getClassificacao = function(){
		return $http.get("http://localhost:8080/GestaoFacil/ws/classificacao");
	}
	var _getPlanoDeContas = function(){
		return $http.get("http://localhost:8080/GestaoFacil/ws/planodecontas");
	}
	
	var _saveLancamento = function(lancamento){
		return $http.put("http://localhost:8080/GestaoFacil/ws/lancamento", lancamento);
	}
	
	var _editLancamento = function(lancamento){
		return $http.post("http://localhost:8080/GestaoFacil/ws/lancamento", lancamento);
	}
	var _removeLancamento = function(lancamento){
		
		return $http.delete("http://localhost:8080/GestaoFacil/ws/lancamento/"+lancamento.id);
	}
	
	var _getTotalReceitasPorMes = function(lancamentos){
	
		var receitasJaneiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 0 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasJaneiro = receitasJaneiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasFevereiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 1 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasFevereiro = receitasFevereiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasMarco = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 2 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasMarco = receitasMarco.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasAbril = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 3 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasAbril = receitasAbril.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasMaio = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 4 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasMaio = receitasMaio.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasJunho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 5 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasJunho = receitasJunho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasJulho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 6 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasJulho = receitasJulho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasAgosto = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 7 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasAgosto = receitasAgosto.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasSetembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 8 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasSetembro = receitasSetembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasOutubro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 9 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalReceitasOutubro = receitasOutubro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		
		var receitasNovembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 10 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalReceitasNovembro = receitasNovembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var receitasDezembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 11 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalReceitasDezembro = receitasDezembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
			
		return [totalReceitasJaneiro,
		        totalReceitasFevereiro,
		        totalReceitasMarco,
		        totalReceitasAbril,
		        totalReceitasMaio,
		        totalReceitasJunho,
		        totalReceitasJulho,
		        totalReceitasAgosto,
		        totalReceitasSetembro,
		        totalReceitasOutubro,
		        totalReceitasNovembro,
		        totalReceitasDezembro];
		
	}

	var _getTotalDespesasPorMes = function(lancamentos){
	
		var despesasJaneiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 0 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasJaneiro = despesasJaneiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasFevereiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 1 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasFevereiro = despesasFevereiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasMarco = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 2 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasMarco = despesasMarco.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasAbril = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 3 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasAbril = despesasAbril.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasMaio = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 4 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasMaio = despesasMaio.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasJunho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 5 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasJunho = despesasJunho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasJulho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 6 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasJulho = despesasJulho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasAgosto = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 7 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasAgosto = despesasAgosto.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasSetembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 8 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasSetembro = despesasSetembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasOutubro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 9 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalDespesasOutubro = despesasOutubro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		
		var despesasNovembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 10 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalDespesasNovembro = despesasNovembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var despesasDezembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 11 && lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalDespesasDezembro = despesasDezembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
			
		return [totalDespesasJaneiro,
		        totalDespesasFevereiro,
		        totalDespesasMarco,
		        totalDespesasAbril,
		        totalDespesasMaio,
		        totalDespesasJunho,
		        totalDespesasJulho,
		        totalDespesasAgosto,
		        totalDespesasSetembro,
		        totalDespesasOutubro,
		        totalDespesasNovembro,
		        totalDespesasDezembro];
		
	}
	
	var _totalLancamentos = function(lancamentos){
		var total = 0;
		for (var int = 0; int < lancamentos.length; int++) {
			if(lancamentos[int].classificacao.descricao == "RECEITA" && lancamentos[int].pago)
				total = total + lancamentos[int].valor;
			else if(lancamentos[int].classificacao.descricao == "DESPESA" && lancamentos[int].pago)
				total = total - lancamentos[int].valor;
		}
		return total;
	}
	
	var _getTotalContasReceberPorMes = function(lancamentos){
		
		var contasReceberJaneiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 0 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberJaneiro = contasReceberJaneiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberFevereiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 1 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberFevereiro = contasReceberFevereiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberMarco = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 2 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberMarco = contasReceberMarco.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberAbril = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 3 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberAbril = contasReceberAbril.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberMaio = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 4 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberMaio = contasReceberMaio.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberJunho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 5 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberJunho = contasReceberJunho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberJulho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 6 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberJulho = contasReceberJulho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberAgosto = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 7 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberAgosto = contasReceberAgosto.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberSetembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 8 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberSetembro = contasReceberSetembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberOutubro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 9 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalContasReceberOutubro = contasReceberOutubro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		
		var contasReceberNovembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 10 && !lancamento.pago){
				return lancamento.valor;
			}
			else{
				return 0;
			}
		});
		totalContasReceberNovembro = contasReceberNovembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasReceberDezembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'RECEITA' && mes == 11 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasReceberDezembro = contasReceberDezembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
			
		return [totalContasReceberJaneiro,
		        totalContasReceberFevereiro,
		        totalContasReceberMarco,
		        totalContasReceberAbril,
		        totalContasReceberMaio,
		        totalContasReceberJunho,
		        totalContasReceberJulho,
		        totalContasReceberAgosto,
		        totalContasReceberSetembro,
		        totalContasReceberOutubro,
		        totalContasReceberNovembro,
		        totalContasReceberDezembro];
	}
	
	var _getTotalContasPagarPorMes = function(lancamentos){
		
		var contasPagarJaneiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 0 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarJaneiro = contasPagarJaneiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarFevereiro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 1 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarFevereiro = contasPagarFevereiro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarMarco = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 2 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarMarco = contasPagarMarco.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarAbril = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 3 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarAbril = contasPagarAbril.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarMaio = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 4 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarMaio = contasPagarMaio.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarJunho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 5 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarJunho = contasPagarJunho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarJulho = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 6 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarJulho = contasPagarJulho.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarAgosto = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 7 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarAgosto = contasPagarAgosto.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarSetembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 8 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarSetembro = contasPagarSetembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarOutubro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 9 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalContasPagarOutubro = contasPagarOutubro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		
		var contasPagarNovembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 10 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		totalContasPagarNovembro = contasPagarNovembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
		
		var contasPagarDezembro = lancamentos.map(function(lancamento){
			mes = new Date(lancamento.data).getMonth();
			if(lancamento.classificacao.descricao == 'DESPESA' && mes == 11 && !lancamento.pago)
				return lancamento.valor;
			else
				return 0;
		});
		var totalContasPagarDezembro = contasPagarDezembro.reduce(function(anterior, atual){
			return anterior + atual;
		});
			
		return [totalContasPagarJaneiro,
		        totalContasPagarFevereiro,
		        totalContasPagarMarco,
		        totalContasPagarAbril,
		        totalContasPagarMaio,
		        totalContasPagarJunho,
		        totalContasPagarJulho,
		        totalContasPagarAgosto,
		        totalContasPagarSetembro,
		        totalContasPagarOutubro,
		        totalContasPagarNovembro,
		        totalContasPagarDezembro];
	}
	
	return {
		getLancamentos : _getLancamentos,
		getClassificacao : _getClassificacao,
		getPlanoDeContas : _getPlanoDeContas,
		saveLancamento : _saveLancamento,
		editLancamento : _editLancamento,
		removeLancamento: _removeLancamento,
		totalLancamento : _totalLancamentos,
		getTotalReceitasPorMes: _getTotalReceitasPorMes,
		getTotalDespesasPorMes: _getTotalDespesasPorMes,
		getLancamentosByMonth: _getLancamentosByMonth,
		getTotalContasReceberPorMes : _getTotalContasReceberPorMes,
		getTotalContasPagarPorMes : _getTotalContasPagarPorMes
	};
});