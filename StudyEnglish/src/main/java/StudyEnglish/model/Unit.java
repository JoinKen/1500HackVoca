package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="unit")
public class Unit implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idunit;
	private String name;
	@Override
	public String toString() {
		return "Unit [idunit=" + idunit + ", name=" + name + "]";
	}
	public Unit(String name) {
		super();
		this.name = name;
	}
	public Unit() {
		
	}
	public int getIdunit() {
		return idunit;
	}
	public void setIdunit(int idunit) {
		this.idunit = idunit;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


}
