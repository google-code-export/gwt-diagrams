package pl.balon.jee.employee.api;


/**
 * TODO czy DTO jst potrzebne, czy mozna modele zwraca�?
 */
public class EmployeeDTO {

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

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return name + " " + surname + " - " + role;
	}
}
