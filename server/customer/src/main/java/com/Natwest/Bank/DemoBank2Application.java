package com.Natwest.Bank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import ch.qos.logback.core.net.SyslogOutputStream;

@SpringBootApplication
@EnableDiscoveryClient
public class DemoBank2Application {

	public static void main(String[] args) {
		SpringApplication.run(DemoBank2Application.class, args);
		System.out.println("Connected to demoBank3");
	}
}
