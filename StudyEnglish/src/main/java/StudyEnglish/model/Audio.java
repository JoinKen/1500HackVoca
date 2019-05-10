package StudyEnglish.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="audio")
public class Audio implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idaudio;
    private String file;
    private String link;
	@Override
	public String toString() {
		return "Audio [idaudio=" + idaudio + ", file=" + file + ", link=" + link + "]";
	}
	public Audio(String file, String link) {
		super();
		this.file = file;
		this.link = link;
	}
	public Audio() {}
	public int getIdaudio() {
		return idaudio;
	}
	public void setIdaudio(int idaudio) {
		this.idaudio = idaudio;
	}
	public String getFile() {
		return file;
	}
	public void setFile(String file) {
		this.file = file;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	
}
