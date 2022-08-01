package com.DojoandNinjas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.DojoandNinjas.models.Ninja;
import com.DojoandNinjas.repository.NinjaRepository;

@Service
public class NinjaService {
    private final NinjaRepository ninjaRepository;

	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}

    // returns all the Ninja
    public List<Ninja> allNinja(){
        return ninjaRepository.findAll();
    }

    // creates a Ninja
    public Ninja createNinja(Ninja Ninja){
        return ninjaRepository.save(Ninja);
    }


	// retrieves a Ninja
	public Ninja findNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
		if (optionalNinja.isPresent()) {
			return optionalNinja.get();
		} else {
			return null;
		}
	}
}
