package com.rodrigoats.gestaofacil.rest.resources;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.rodrigoats.gestaofacil.model.entities.Classificacao;
import com.rodrigoats.gestaofacil.model.repo.ClassificacaoRepo;

@Named
@Path("/classificacao")
public class ClassificacaoWS {
	
	@Inject
	private ClassificacaoRepo<Classificacao> classificacaoRepo;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listClassificacoes() {

		Gson gson = new Gson();
		List<Classificacao> classificacoes = classificacaoRepo.getClassificacoes();

		return Response.ok(gson.toJson(classificacoes)).build();

	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response editClassificacao(String classificacaoStr) {

		Classificacao classificacao = new Classificacao();
		classificacao = classificacaoRepo.editClassificacao(classificacao);
		return Response.ok(classificacao).build();
	}

	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response createClassificacao(String classificacaoStr){
		
		Gson gson = new Gson();
		
		Classificacao classificacao = gson.fromJson(classificacaoStr, Classificacao.class);
		classificacaoRepo.createClassificacao(classificacao);
		return Response.ok().build();
	}

}
