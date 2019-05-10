package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="users")
public class Users implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idusers;
	private String name;
	private String password;
	private String avat;
	private String email;
	@Override
	public String toString() {
		return "Users [idusers=" + idusers + ", name=" + name + ", password=" + password + ", avat=" + avat + ", email="
				+ email + "]";
	}
	public Users() {
		
	}
	public Users(String name, String password, String avat, String email) {
		super();
		this.name = name;
		this.password = password;
		this.avat = avat;
		this.email = email;
	}
	public int getIdusers() {
		return idusers;
	}
	public void setIdusers(int idusers) {
		this.idusers = idusers;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAvat() {
		return avat;
	}
	public void setAvat(String avat) {
		this.avat = avat;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}


}
