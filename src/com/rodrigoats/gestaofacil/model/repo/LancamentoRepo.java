package com.rodrigoats.gestaofacil.model.repo;

import java.util.Date;
import java.util.List;

import com.rodrigoats.gestaofacil.model.entities.Lancamento;

public interface LancamentoRepo<T> {

	List<Lancamento> getLancamentos();
	Lancamento createLancamento(Lancamento lancamento);
	Lancamento editLancamento(Lancamento lancamento);
	List<Lancamento> lancamentoByPeriodo(Date dtInicio, Date dtFim);
	Lancamento lancamentoById(Lancamento lancamento);
	void removeLancamento(Lancamento lancamento);
	String getDonutReceitasGraph();
}
