package pl.balon.jee.employee.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import pl.balon.jee.employee.model.Employee;

@Stateless
public class JpaEmployeeDao implements EmployeeDao {

	@PersistenceContext
	private EntityManager entityManager;
	
	public List<Employee> listAllEmployees() {
		return entityManager.createQuery("select object(e) from Employee e").getResultList();
	}

	public Employee loadEmployee(Long id) {
		return entityManager.find(Employee.class, id);
	}

	public void addEmployee(Employee employee) {
		entityManager.persist(employee);
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

}
