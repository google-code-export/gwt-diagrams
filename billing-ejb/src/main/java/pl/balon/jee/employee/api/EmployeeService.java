package pl.balon.jee.employee.api;

import java.util.List;

public interface EmployeeService {

	public void add(EmployeeDTO dto);
	
	public List<EmployeeDTO> listAll();
	
}
