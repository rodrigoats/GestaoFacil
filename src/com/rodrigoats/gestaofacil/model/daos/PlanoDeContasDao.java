package com.rodrigoats.gestaofacil.model.daos;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.MongoOperations;

import com.rodrigoats.gestaofacil.model.connection.MongoConnection;
import com.rodrigoats.gestaofacil.model.entities.PlanoDeContas;
import com.rodrigoats.gestaofacil.model.repo.PlanoDeContasRepo;

public class PlanoDeContasDao implements PlanoDeContasRepo<PlanoDeContas>{

	MongoOperations mongoOperations = MongoConnection.getInstance().getMongoOperations();

	@Override
	public List<PlanoDeContas> getPlanosDeConta() {
		return mongoOperations.findAll(PlanoDeContas.class);
	}

	@Override
	public PlanoDeContas createPlanoDeContas(PlanoDeContas planoDeContas) {

		mongoOperations.save(planoDeContas);
		return planoDeContas;
	}

	@Override
	public PlanoDeContas editPlanoDeContas(PlanoDeContas planoDeContas) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PlanoDeContas> PlanoDeContasByPeriodo(Date dtInicio, Date dtFim) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PlanoDeContas PlanoDeContasById(PlanoDeContas planoDeContas) {
		// TODO Auto-generated method stub
		return null;
	}

}
