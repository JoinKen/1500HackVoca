package StudyEnglish.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import StudyEnglish.dao.AudioRepository;
import StudyEnglish.dao.ContentstoryRepository;
import StudyEnglish.dao.MytopicRepository;
import StudyEnglish.dao.MyvocabularyRepository;
import StudyEnglish.dao.Part1Repository;
import StudyEnglish.dao.ProccessRepository;

import StudyEnglish.dao.TypewordRepository;
import StudyEnglish.dao.UnitRepository;
import StudyEnglish.dao.UsersRepository;
import StudyEnglish.dao.VocabularyRepository;
import StudyEnglish.model.Audio;
import StudyEnglish.model.Contentstory;
import StudyEnglish.model.Mytopic;
import StudyEnglish.model.Myvocabulary;
import StudyEnglish.model.Part1;
import StudyEnglish.model.Proccess;
import StudyEnglish.model.Typeword;
import StudyEnglish.model.Unit;
import StudyEnglish.model.Users;
import StudyEnglish.model.Vocabulary;
@Service
public class ServiceAll {
	public final ProccessRepository proccessRp;
//	public final SoundsameRepository soundsameRp;
	public final TypewordRepository typewordRp;
	public final UnitRepository unitRp;
	public final UsersRepository usersRp;
	public final VocabularyRepository vocabularyRp;
	
	public final AudioRepository audioRp;
	public final ContentstoryRepository contentstoryRp;
	public final MytopicRepository mytopicRp;
	public final MyvocabularyRepository myvocabularyRp;
	public final Part1Repository part1Rp;
	public ServiceAll(ProccessRepository proccessRp,
			TypewordRepository typewordRp,UnitRepository unitRp,UsersRepository usersRp,
			VocabularyRepository vocabularyRp, AudioRepository audioRp, ContentstoryRepository contentstoryRp,
			MytopicRepository mytopicRp,MyvocabularyRepository myvocabularyRp, Part1Repository part1Rp)
	{
		this.proccessRp=proccessRp;
	//	this.soundsameRp=soundsameRp;
		this.typewordRp=typewordRp;
		this.unitRp=unitRp;
		this.usersRp=usersRp;
		this.vocabularyRp=vocabularyRp;
		this.audioRp=audioRp;
		this.contentstoryRp=contentstoryRp;
		this.mytopicRp=mytopicRp;
		this.myvocabularyRp=myvocabularyRp;
		this.part1Rp =part1Rp;
		
	}
	public List<Proccess> findAllProccess(){
		List<Proccess>tasks=new ArrayList<Proccess>();
		for(Proccess task:proccessRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	
	public List<Typeword> findAllTypeWord(){
		List<Typeword>tasks=new ArrayList<Typeword>();
		for(Typeword task:typewordRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Unit> findAllUnit(){
		List<Unit>tasks=new ArrayList<Unit>();
		for(Unit task:unitRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Users> findAllUsers(){
		List<Users>tasks=new ArrayList<Users>();
		for(Users task:usersRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Vocabulary> findAllVocabulary(){
		List<Vocabulary>tasks=new ArrayList<Vocabulary>();
		for(Vocabulary task:vocabularyRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Audio> findAllAudio(){
		List<Audio> tasks=new ArrayList<Audio>();
		for(Audio task:audioRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Contentstory> findAllContentstory(){
		List<Contentstory> tasks=new ArrayList<Contentstory>();
		for(Contentstory task:contentstoryRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Mytopic> findAllMytopic(){
		List<Mytopic> tasks=new ArrayList<Mytopic>();
		for(Mytopic task:mytopicRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Myvocabulary> findAllMyvocabulary(){
		List<Myvocabulary> tasks=new ArrayList<Myvocabulary>();
		for(Myvocabulary task:myvocabularyRp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}
	public List<Part1> findAllPart1(){
		List<Part1> tasks=new ArrayList<Part1>();
		for(Part1 task:part1Rp.findAll()) {
			tasks.add(task);
		}
		return tasks;
	}

	public void saveMyTopic(Mytopic mytopic)
	{
		mytopicRp.save(mytopic);
	}
	public void DeleteMyTopic(int id)
	{
		mytopicRp.deleteById(id);
	}
	public void saveMyVocabulary(Myvocabulary myvocabulary)
	{
		myvocabularyRp.save(myvocabulary);
	}
	public void deleteMyVocabulary(int id)
	{
		myvocabularyRp.deleteById(id);
	}
}
