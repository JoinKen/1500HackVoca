package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="soundsame")
public class Soundsame implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idsoundsame;
	private String content;
	private int idtypeword;
	@Override
	public String toString() {
		return "Soundsame [idsoundsame=" + idsoundsame + ", content=" + content + ", idtypeword=" + idtypeword + "]";
	}
	public Soundsame() {
		
	}
	public Soundsame(String content, int idtypeword) {
		super();
		this.content = content;
		this.idtypeword = idtypeword;
	}
	public int getIdsoundsame() {
		return idsoundsame;
	}
	public void setIdsoundsame(int idsoundsame) {
		this.idsoundsame = idsoundsame;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getIdtypeword() {
		return idtypeword;
	}
	public void setIdtypeword(int idtypeword) {
		this.idtypeword = idtypeword;
	}

}
