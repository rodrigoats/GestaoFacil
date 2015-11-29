package com.rodrigoats.gestaofacil.model.connection;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;

@Configuration
public class SpringMongoConfig extends AbstractMongoConfiguration{

	private static final String user = "admin";
	private static final char [] pass = "BQaa4EHYd8vU".toCharArray();
//	private static final String mongodb = "gestaofacil";
	private static final String mongodb = "gestaofacildb";
	
	@Override
	protected String getDatabaseName() {
		return  mongodb;
	}

	@Override
	@Bean
	public Mongo mongo() throws Exception {
//		List<ServerAddress>seeds = new ArrayList<ServerAddress>();
//		List<MongoCredential> credenciais = new ArrayList<MongoCredential>();
//		seeds.add(new ServerAddress("127.13.34.2"));
//		MongoCredential credential = MongoCredential.createCredential(user, mongodb, pass);
//		credenciais.add(credential);
//		return new MongoClient(seeds, credenciais);
		return new MongoClient("127.0.0.1");
	}

}
