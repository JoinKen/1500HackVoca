package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="typeword")
public class Typeword implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idtypeword;
	private String nametypeword;
	@Override
	public String toString() {
		return "Typeword [idtypeword=" + idtypeword + ", nametypeword=" + nametypeword + "]";
	}
	public Typeword() {
		
	}
	public Typeword(String nametypeword) {
		super();
		this.nametypeword = nametypeword;
	}
	public int getIdtypeword() {
		return idtypeword;
	}
	public void setIdtypeword(int idtypeword) {
		this.idtypeword = idtypeword;
	}
	public String getNametypeword() {
		return nametypeword;
	}
	public void setNametypeword(String nametypeword) {
		this.nametypeword = nametypeword;
	}

}
