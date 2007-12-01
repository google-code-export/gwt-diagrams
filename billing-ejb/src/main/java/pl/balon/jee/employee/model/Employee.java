package pl.balon.jee.employee.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import pl.balon.jee.employee.api.Role;

@Entity
@Table(name = "EMPLOYEE")
public class Employee {

	@Id
    @GeneratedValue
	private Long id;
	
	private String name;
	
	private String surname;
	
	private Role role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role position) {
		this.role = position;
	}
}
