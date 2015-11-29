package com.rodrigoats.gestaofacil.rest.resources;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.rodrigoats.gestaofacil.model.entities.Lancamento;
import com.rodrigoats.gestaofacil.model.repo.LancamentoRepo;

@Path("grafico")
public class GraficosWS {

	@Inject
	private LancamentoRepo<Lancamento> lancamentoRepo;
	
	@GET
	@Path("/donutReceitas")
	public Response getDonutReceitasGraph(){
		
		try{
			String data = lancamentoRepo.getDonutReceitasGraph();
			return Response.status(Status.OK).entity(data).build();
		}catch (Exception e){
			return Response.status(Status.BAD_GATEWAY).build();
		}
	}
}
