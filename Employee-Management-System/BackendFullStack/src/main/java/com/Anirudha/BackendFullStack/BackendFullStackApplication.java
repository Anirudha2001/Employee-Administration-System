package com.vaibhav.BackendFullStack;

import com.vaibhav.BackendFullStack.model.Employee;
import com.vaibhav.BackendFullStack.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendFullStackApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendFullStackApplication.class, args);
	}


	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
//



	}
}
