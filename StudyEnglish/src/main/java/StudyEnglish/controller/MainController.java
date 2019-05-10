package StudyEnglish.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

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
import StudyEnglish.service.ServiceAll;

@Controller
public class MainController {
	@Autowired
	private ServiceAll sv;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONTypeword")
	@ResponseBody
	public List<Typeword> JSONTypeword() {
		List<Typeword> list = new ArrayList<Typeword>();
		list = sv.findAllTypeWord();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONUnit")
	@ResponseBody
	public List<Unit> JSONUnit() {
		List<Unit> list = new ArrayList<Unit>();
		list = sv.findAllUnit();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONUsers")
	@ResponseBody
	public List<Users> JSONUsers() {
		List<Users> list = new ArrayList<Users>();
		list = sv.findAllUsers();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONVocabulary") // Load vocabulary part 2
	@ResponseBody
	public List<Vocabulary> JSONVocabulary() {
		List<Vocabulary> list = new ArrayList<Vocabulary>();
		List<Vocabulary> listVocaPart2 = new ArrayList<Vocabulary>();
		list = sv.findAllVocabulary();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getIdpart1() == 2) {
				listVocaPart2.add(list.get(i));
			}
		}
		Collections.sort(listVocaPart2, new Vocabulary());
		return listVocaPart2;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONAudio")
	@ResponseBody
	public List<Audio> JSONAudio() {
		List<Audio> list = new ArrayList<Audio>();
		list = sv.findAllAudio();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONContentstory")
	@ResponseBody
	public List<Contentstory> JSONContentstory() {
		List<Contentstory> list = new ArrayList<Contentstory>();
		list = sv.findAllContentstory();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONMytopic")
	@ResponseBody
	public List<Mytopic> JSONMytopic() {
		List<Mytopic> list = new ArrayList<Mytopic>();
		list = sv.findAllMytopic();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONMyvocabulary")
	@ResponseBody
	public List<Myvocabulary> JSONMyvocabulary() {
		List<Myvocabulary> list = new ArrayList<Myvocabulary>();
		list = sv.findAllMyvocabulary();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONPart1")
	@ResponseBody
	public List<Part1> JSONPart1() {
		List<Part1> list = new ArrayList<Part1>();
		list = sv.findAllPart1();
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/JSONContentstoryTextbox")
	@ResponseBody
	public List<Contentstory> TraVe3ChamTrongContent(HttpServletRequest request) {
		List<Contentstory> list = new ArrayList<Contentstory>();
		List<Vocabulary> listVoca = JSONVocabulary();

		listVoca = sv.findAllVocabulary();
		list = sv.findAllContentstory();
		String l = "";
		String temp = "";
		int key = 1;

		for (int i = 0; i < list.size(); i++) {

			for (int j = 0; j < listVoca.size(); j++) {
				if (!(list.get(i).getContentenglish().indexOf(listVoca.get(j).getVoca()) == -1)) {
					temp = "<input id='" + (1001 + key++) + "'" + " class='input-part1' "
					+"   maxLength='14'></input>";
					l = list.get(i).getContentenglish()
							.replace("<span style='color: #ff0000;'>" + listVoca.get(j).getVoca() + "</span>", temp);
					list.get(i).setContentenglish(l);
					//TODO:
					//replace("<span style='color: #ff0000;'>" + listVoca.get(j).getVoca() + "</span>", temp);
					//Đổi lại style='color: #ff0000;' thành class='voca-part1'

				}
			}

		}
		return list;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/SaveMyTopic")
	public void saveTasks(Mytopic mytopic) {
		sv.saveMyTopic(mytopic);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/DeleteMyTopic")
	public void deleteTasks(int id) {
		sv.DeleteMyTopic(id);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/DeleteMyVocabulary")
	public void deleteMyVocabulary(int id) {
		sv.DeleteMyTopic(id);
		;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/SaveMyVocabulary")
	public void saveMyVOcabulary(@ModelAttribute Myvocabulary myvocabulary, BindingResult bindingResult,
			HttpServletRequest request) {
		sv.saveMyVocabulary(myvocabulary);
	}
}