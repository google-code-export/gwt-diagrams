package pl.balon.jee.employee.core;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import pl.balon.jee.employee.api.EmployeeDTO;
import pl.balon.jee.employee.api.EmployeeService;
import pl.balon.jee.employee.dao.EmployeeDao;
import pl.balon.jee.employee.model.Employee;

@Stateless
public class EmployeeServiceImpl implements EmployeeService {

	@EJB
	private EmployeeDao employeeDao;

	public void add(EmployeeDTO dto) {
		Employee employee = new Employee();
		employee.setName(dto.getName());
		employee.setSurname(dto.getSurname());
		employee.setRole(dto.getRole());
		employeeDao.addEmployee(employee);
	}

	public List<EmployeeDTO> listAll() {
		List<EmployeeDTO> dtos = new ArrayList<EmployeeDTO>();
		List<Employee> models = employeeDao.listAllEmployees();
		for (Employee employee : models) {
			EmployeeDTO dto = new EmployeeDTO();
			dto.setId(employee.getId());
			dto.setName(employee.getName());
			dto.setSurname(employee.getSurname());
			dto.setRole(employee.getRole());
			dtos.add(dto);
		}
		return dtos;
	}
	

}
