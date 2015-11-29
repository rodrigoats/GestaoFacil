package com.rodrigoats.gestaofacil.model.entities;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lancamento")
public class Lancamento implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1281116181871809885L;

	@Id
	private String id;
	
	private Classificacao classificacao;
	
	private String observacao;
	
	private Double valor;
	
	private boolean pago;

	private String item;
	
	private Date data;
	
	private PlanoDeContas planodecontas;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Classificacao getClassificacao() {
		return classificacao;
	}

	public void setClassificacao(Classificacao classificacao) {
		this.classificacao = classificacao;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public boolean isPago() {
		return pago;
	}

	public void setPago(boolean pago) {
		this.pago = pago;
	}

	public String getResumoGeral() {
		return item;
	}

	public void setResumoGeral(String item) {
		this.item = item;
	}

	public PlanoDeContas getPlanodecontas() {
		return planodecontas;
	}

	public void setPlanodecontas(PlanoDeContas planodecontas) {
		this.planodecontas = planodecontas;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	
}
