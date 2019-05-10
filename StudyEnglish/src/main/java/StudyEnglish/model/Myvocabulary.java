package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="myvocabulary")
public class Myvocabulary implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idmyvocabulary;
	private String wordenglish;
	private String wordvietsub;
	private String spelling;
	private int idtypeword;
	private int idusers;
	@Override
	public String toString() {
		return "Myvocabulary [idmyvocabulary=" + idmyvocabulary + ", wordenglish=" + wordenglish + ", wordvietsub="
				+ wordvietsub + ", spelling=" + spelling + ", idtypeword=" + idtypeword + ", idusers=" + idusers + "]";
	}
	public Myvocabulary() {
		
	}
	public Myvocabulary(String wordenglish, String wordvietsub, String spelling, int idtypeword, int idusers) {
		super();
		this.wordenglish = wordenglish;
		this.wordvietsub = wordvietsub;
		this.spelling = spelling;
		this.idtypeword = idtypeword;
		this.idusers = idusers;
	}
	public int getIdmyvocabulary() {
		return idmyvocabulary;
	}
	public void setIdmyvocabulary(int idmyvocabulary) {
		this.idmyvocabulary = idmyvocabulary;
	}
	public String getWordenglish() {
		return wordenglish;
	}
	public void setWordenglish(String wordenglish) {
		this.wordenglish = wordenglish;
	}
	public String getWordvietsub() {
		return wordvietsub;
	}
	public void setWordvietsub(String wordvietsub) {
		this.wordvietsub = wordvietsub;
	}
	public String getSpelling() {
		return spelling;
	}
	public void setSpelling(String spelling) {
		this.spelling = spelling;
	}
	public int getIdtypeword() {
		return idtypeword;
	}
	public void setIdtypeword(int idtypeword) {
		this.idtypeword = idtypeword;
	}
	public int getIdusers() {
		return idusers;
	}
	public void setIdusers(int idusers) {
		this.idusers = idusers;
	}
}
