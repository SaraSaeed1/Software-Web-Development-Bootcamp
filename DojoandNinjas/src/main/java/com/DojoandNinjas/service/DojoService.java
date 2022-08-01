package com.DojoandNinjas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.DojoandNinjas.models.Dojo;
import com.DojoandNinjas.repository.DojoRepository;

@Service
public class DojoService {

    private final DojoRepository dojoRepository;

	public DojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
	}

    // returns all the Dojo
    public List<Dojo> allDojo(){
        return dojoRepository.findAll();
    }

    // creates a Dojo
    public Dojo createDojo(Dojo dojo){
        return dojoRepository.save(dojo);
    }


	// retrieves a Dojo
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepository.findById(id);
		if (optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}

}
