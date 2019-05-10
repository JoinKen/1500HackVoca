package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="mytopic")
public class Mytopic implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idmytopic;
	private String subject;
	private String content;
	private int idunit;
	private int idusers;
	@Override
	public String toString() {
		return "Mytopic [idmytopic=" + idmytopic + ", subject=" + subject + ", content=" + content + ", idunit="
				+ idunit + ", idusers=" + idusers + "]";
	}
	public Mytopic() {
		
	}
	public Mytopic(String subject, String content, int idunit, int idusers) {
		super();
		this.subject = subject;
		this.content = content;
		this.idunit = idunit;
		this.idusers = idusers;
	}
	public int getIdmytopic() {
		return idmytopic;
	}
	public void setIdmytopic(int idmytopic) {
		this.idmytopic = idmytopic;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getIdunit() {
		return idunit;
	}
	public void setIdunit(int idunit) {
		this.idunit = idunit;
	}
	public int getIdusers() {
		return idusers;
	}
	public void setIdusers(int idusers) {
		this.idusers = idusers;
	}

}
