package com.rodrigoats.gestaofacil.model.daos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.google.gson.Gson;
import com.rodrigoats.gestaofacil.model.connection.MongoConnection;
import com.rodrigoats.gestaofacil.model.entities.Lancamento;
import com.rodrigoats.gestaofacil.model.repo.LancamentoRepo;


public class LancamentoDao implements LancamentoRepo<Lancamento>{

	MongoOperations mongoOperations = MongoConnection.getInstance().getMongoOperations();
	
	public List<Lancamento> getLancamentos(){
		
		List<Lancamento> lancamentos = new ArrayList<>();
		lancamentos = mongoOperations.findAll(Lancamento.class);
		return lancamentos;
	}

	@Override
	public Lancamento createLancamento(Lancamento lancamento) {
		 mongoOperations.save(lancamento);
		 return lancamento;
	}

	@Override
	public Lancamento editLancamento(Lancamento lancamento) {
//		TODO implementar alteração
		Query query = new Query(Criteria.where("id").is(lancamento.getId()));
		mongoOperations.updateFirst(query, Update.update("pago", lancamento.isPago()), Lancamento.class);
		return lancamento;
	}

	@Override
	public Lancamento lancamentoById(Lancamento lancamento) {
		
		Query query = new Query(Criteria.where("id").is(lancamento.getId()));
		return mongoOperations.findOne(query, Lancamento.class);
	}

	@Override
	public List<Lancamento> lancamentoByPeriodo(Date dtInicio, Date dtFim) {
		Query query = new Query(Criteria.where("data").gt(dtInicio).lt(dtFim));
		return mongoOperations.find(query, Lancamento.class);
	}

	@Override
	public void removeLancamento(Lancamento lancamento) {
		mongoOperations.remove(lancamento);
	}
	
	@Override
	public List<Lancamento> getDonutReceitasGraph(){
	
		TypedAggregation<Lancamento> agg = Aggregation.newAggregation(Lancamento.class,
				Aggregation.group("planodecontas.descricao").sum("valor").as("valor")
				);
		AggregationResults<Lancamento> results =  mongoOperations.aggregate(agg, Lancamento.class, Lancamento.class);
		List<Lancamento> resultList = results.getMappedResults();
		return resultList;
	}
	
}
