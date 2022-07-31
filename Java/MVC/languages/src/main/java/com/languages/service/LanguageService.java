package com.languages.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.languages.models.Language;
import com.languages.repository.LanguagesRepository;

@Service
public class LanguageService {

	private final LanguagesRepository languagesRepository;

	public LanguageService(LanguagesRepository languagesRepository) {
		this.languagesRepository = languagesRepository;
	}
	// returns all the Language
    public List<Language> allLanguage() {
        return languagesRepository.findAll();
    }
    // creates a Language
    public Language createLanguage(Language Language) {
        return languagesRepository.save(Language);
    }


	// retrieves a Language
	public Language findLanguage(Long id) {
		Optional<Language> optionalLanguage = languagesRepository.findById(id);
		if (optionalLanguage.isPresent()) {
			return optionalLanguage.get();
		} else {
			return null;
		}
	}
	
	//update Language 
		public Language updateLanguage(Language language, Long id){
			Language x =languagesRepository.findById(id).get();
			x.setName(language.getName());
			x.setCreator(language.getCreator());
			x.setCurrentVersion(language.getCurrentVersion());
			return languagesRepository.save(x);
		}

		//delete Language 
		public void deleteLanguage(Long id) {
			languagesRepository.deleteById(id);
		}
	}
