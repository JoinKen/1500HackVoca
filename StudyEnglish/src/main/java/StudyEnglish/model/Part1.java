package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="part1")
public class Part1 implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idpart;
	private String title;
	private String indution;
	private int idaudio;
	private int idunit;
	@Override
	public String toString() {
		return "Part1 [idpart=" + idpart + ", title=" + title + ", indution=" + indution + ", idaudio=" + idaudio
				+ ", idunit=" + idunit + "]";
	}
	public Part1() {
		
	}
	public Part1(String title, String indution, int idaudio, int idunit) {
		super();
		this.title = title;
		this.indution = indution;
		this.idaudio = idaudio;
		this.idunit = idunit;
	}
	public int getIdpart() {
		return idpart;
	}
	public void setIdpart(int idpart) {
		this.idpart = idpart;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getIndution() {
		return indution;
	}
	public void setIndution(String indution) {
		this.indution = indution;
	}
	public int getIdaudio() {
		return idaudio;
	}
	public void setIdaudio(int idaudio) {
		this.idaudio = idaudio;
	}
	public int getIdunit() {
		return idunit;
	}
	public void setIdunit(int idunit) {
		this.idunit = idunit;
	}

}
