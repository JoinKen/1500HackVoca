package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="proccess")
public class Proccess implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idprocess;
	private String unit;
	private String part;
	private int iduser;
	@Override
	public String toString() {
		return "Proccess [idprocess=" + idprocess + ", unit=" + unit + ", part=" + part + ", iduser=" + iduser + "]";
	}
	public Proccess() {
		
	}
	public Proccess(String unit, String part, int iduser) {
		super();
		this.unit = unit;
		this.part = part;
		this.iduser = iduser;
	}
	public int getIdprocess() {
		return idprocess;
	}
	public void setIdprocess(int idprocess) {
		this.idprocess = idprocess;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getPart() {
		return part;
	}
	public void setPart(String part) {
		this.part = part;
	}
	public int getIduser() {
		return iduser;
	}
	public void setIduser(int iduser) {
		this.iduser = iduser;
	}
}
