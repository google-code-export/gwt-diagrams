package pl.balon.jee.employee.dao;

import java.util.List;

import pl.balon.jee.employee.model.Employee;

public interface EmployeeDao {

	public Employee loadEmployee(Long id);
	
	public List<Employee> listAllEmployees();

	public void addEmployee(Employee employee);
	
}
