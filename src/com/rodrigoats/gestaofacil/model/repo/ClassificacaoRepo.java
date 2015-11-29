package com.rodrigoats.gestaofacil.model.repo;

import java.util.Date;
import java.util.List;

import com.rodrigoats.gestaofacil.model.entities.Classificacao;

public interface ClassificacaoRepo<T> {
	
	List<Classificacao> getClassificacoes();
	Classificacao createClassificacao(Classificacao classificacao);
	Classificacao editClassificacao(Classificacao classificacao);
	List<Classificacao> classificacaoByPeriodo(Date dtInicio, Date dtFim);
	Classificacao classificacaoById(Classificacao classificacao);
}
