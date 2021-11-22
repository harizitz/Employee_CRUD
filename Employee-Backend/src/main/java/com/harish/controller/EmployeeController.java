package com.harish.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.harish.exception.ResourceNotFound;
import com.harish.model.Employee;
import com.harish.repository.EmployeeRepository;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EmployeeController {

	@Autowired
	EmployeeRepository employeerepository;

	@GetMapping("/employees")
	public List<Employee> getallEmployees() {
		return employeerepository.findAll();
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeerepository.save(employee);
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getemployeeById(@PathVariable long id) { 
		Employee employee = employeerepository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee with id " + id + "is not found"));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@RequestBody Employee employee,@PathVariable long id)
	{
		Employee employeeById = employeerepository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee with id " + id + "is not found"));
		employeeById.setFirstName(employee.getFirstName());
		employeeById.setLastName(employee.getLastName());
		employeeById.setEmail(employee.getEmail());
		employeerepository.save(employeeById);
		return employeeById;
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable long id){
		employeerepository.deleteById(id);
	}
}
