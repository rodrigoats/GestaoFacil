package com.rodrigoats.gestaofacil.rest.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.google.gson.Gson;
import com.rodrigoats.gestaofacil.model.entities.Lancamento;
import com.rodrigoats.gestaofacil.model.repo.LancamentoRepo;

@Path("/grafico")
public class GraficosWS {

	@Inject
	private LancamentoRepo<Lancamento> lancamentoRepo;
	
	@GET
	@Path("/donutReceitas")
	public Response getDonutReceitasGraph(){
		
		try{
			Gson gson = new Gson();
			List<Lancamento> lancamentos = lancamentoRepo.getDonutReceitasGraph();
			return Response.status(Status.OK).entity(gson.toJson(lancamentos)).build();
		}catch (Exception e){
			return Response.status(Status.BAD_GATEWAY).build();
		}
	}
}
