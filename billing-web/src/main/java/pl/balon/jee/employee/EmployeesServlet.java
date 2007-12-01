package pl.balon.jee.employee;

import java.io.IOException;

import javax.ejb.EJB;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import pl.balon.jee.employee.api.EmployeeDTO;
import pl.balon.jee.employee.api.EmployeeService;
import pl.balon.jee.employee.api.Role;

@SuppressWarnings("serial")
public class EmployeesServlet extends HttpServlet {

	@EJB
	private EmployeeService employeeService;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
//		try {
//			InitialContext ctx = new InitialContext();
//			ctx.lookup("employeeService");
//		} catch (NamingException e) {
//			throw new RuntimeException(e);
//			
//		}
		
		
		EmployeeDTO e1 = new EmployeeDTO();
		e1.setName("Jan");
		e1.setSurname("Kowalski");
		e1.setRole(Role.ARCHITECT_IT);
		
		employeeService.add(e1);
		
		for (EmployeeDTO employee : employeeService.listAll()) {
			resp.getOutputStream().println(employee.toString());
		}
	}
}
