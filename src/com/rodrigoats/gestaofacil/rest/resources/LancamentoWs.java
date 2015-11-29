package com.rodrigoats.gestaofacil.rest.resources;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.rodrigoats.gestaofacil.model.entities.Lancamento;
import com.rodrigoats.gestaofacil.model.repo.LancamentoRepo;

@Path("/lancamento")
public class LancamentoWs {

	@Inject
	private LancamentoRepo<Lancamento> lancamentoRepo;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listLancamentos() {

		Gson gson = new Gson();
		List<Lancamento> lances = lancamentoRepo.getLancamentos();

		return Response.ok(gson.toJson(lances)).build();

	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{mes}")
	public Response listLancamentosByMounth(@PathParam(value = "mes") String mes) {

		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
		try {
			Date dtInicio = sdf.parse("01-" + mes);
			Date dtFim;
			dtFim = sdf.parse("31-" + mes);
		
			Gson gson = new Gson();
			List<Lancamento> lances = lancamentoRepo.lancamentoByPeriodo(dtInicio, dtFim);
	
			return Response.ok(gson.toJson(lances)).build();
		} catch (ParseException e) {
			e.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).build();
			
		}

	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response editLancamento(String lancamento) {
		Gson gson = new Gson();
		Lancamento lanc = gson.fromJson(lancamento, Lancamento.class);
		lanc = lancamentoRepo.editLancamento(lanc);
		return Response.ok(lanc).build();
	}

	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response createLancamento(String lancamento){
		
		Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
			
		Lancamento lanc = gson.fromJson(lancamento, Lancamento.class);
		lancamentoRepo.createLancamento(lanc);
		return Response.ok().build();
	}
	
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public Response removerLancamento(@PathParam(value = "id") String id){
		
		Lancamento lanc = new Lancamento();
		lanc.setId(id);
		lancamentoRepo.removeLancamento(lanc);
		return Response.ok().build();
	}
}
