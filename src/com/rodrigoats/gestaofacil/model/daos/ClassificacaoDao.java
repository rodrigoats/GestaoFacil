package com.rodrigoats.gestaofacil.model.daos;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.MongoOperations;

import com.rodrigoats.gestaofacil.model.connection.MongoConnection;
import com.rodrigoats.gestaofacil.model.entities.Classificacao;
import com.rodrigoats.gestaofacil.model.repo.ClassificacaoRepo;

public class ClassificacaoDao implements ClassificacaoRepo<Classificacao> {
	
	MongoOperations mongoOperations = MongoConnection.getInstance().getMongoOperations();

	@Override
	public List<Classificacao> getClassificacoes() {
		
		return mongoOperations.findAll(Classificacao.class);
	}

	@Override
	public Classificacao createClassificacao(Classificacao classificacao) {
		mongoOperations.save(classificacao);
		return classificacao;
	}

	@Override
	public Classificacao editClassificacao(Classificacao classificacao) {
		//TODO
		return null;
	}

	@Override
	public List<Classificacao> classificacaoByPeriodo(Date dtInicio, Date dtFim) {
		//TODO
		return null;
	}

	@Override
	public Classificacao classificacaoById(Classificacao classificacao) {
		//TODO
		return null;
	}

}
