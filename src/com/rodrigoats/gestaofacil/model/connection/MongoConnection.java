package com.rodrigoats.gestaofacil.model.connection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;


public class MongoConnection {

	private static MongoConnection instance;
	private MongoOperations mongoOperations;
	ApplicationContext ctx ;
	
	public MongoOperations getMongoOperations() {
		
		mongoOperations = (MongoOperations) ctx.getBean("mongoTemplate");
		return mongoOperations;
	}

	private MongoConnection() {
		ctx	= new AnnotationConfigApplicationContext(SpringMongoConfig.class);
	}
	
	public static synchronized MongoConnection getInstance(){
			if(instance == null){
				instance = new MongoConnection();
				return instance;
			} else{
				return instance;
			}
	}
}
