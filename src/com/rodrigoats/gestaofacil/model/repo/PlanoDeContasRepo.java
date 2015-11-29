package com.rodrigoats.gestaofacil.model.repo;

import java.util.Date;
import java.util.List;

import com.rodrigoats.gestaofacil.model.entities.PlanoDeContas;

public interface PlanoDeContasRepo<T> {
	
	List<PlanoDeContas> getPlanosDeConta();
	PlanoDeContas createPlanoDeContas(PlanoDeContas planoDeContas);
	PlanoDeContas editPlanoDeContas(PlanoDeContas planoDeContas);
	List<PlanoDeContas> PlanoDeContasByPeriodo(Date dtInicio, Date dtFim);
	PlanoDeContas PlanoDeContasById(PlanoDeContas planoDeContas);
}

