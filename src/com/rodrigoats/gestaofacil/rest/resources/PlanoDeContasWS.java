package com.rodrigoats.gestaofacil.rest.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.rodrigoats.gestaofacil.model.entities.PlanoDeContas;
import com.rodrigoats.gestaofacil.model.repo.PlanoDeContasRepo;

@Path("/planodecontas")
public class PlanoDeContasWS {	
	
	@Inject
	private PlanoDeContasRepo<PlanoDeContas> planoDeContasRepo;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listPlanosDeContas() {

		Gson gson = new Gson();
		List<PlanoDeContas> planosDeConta = planoDeContasRepo.getPlanosDeConta();

		return Response.ok(gson.toJson(planosDeConta)).build();

	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response editPlanoDeConta(String planoDeContasStr) {

		PlanoDeContas planoDeContas = new PlanoDeContas();
		planoDeContas = planoDeContasRepo.editPlanoDeContas(planoDeContas);
		return Response.ok(planoDeContas).build();
	}

	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response createClassificacao(String planoDeContasStr){
		
		Gson gson = new Gson();
		
		PlanoDeContas planoDeContas = gson.fromJson(planoDeContasStr, PlanoDeContas.class);
		planoDeContasRepo.createPlanoDeContas(planoDeContas);
		return Response.ok().build();
	}

}
