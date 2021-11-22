package com.harish.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.harish.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
