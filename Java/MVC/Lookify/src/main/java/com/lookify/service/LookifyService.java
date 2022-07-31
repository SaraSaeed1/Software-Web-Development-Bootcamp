package com.lookify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.lookify.models.Lookify;
import com.lookify.repository.LookifyRepository;

@Service
public class LookifyService {

	private final LookifyRepository lookifyRepository;

	public LookifyService(LookifyRepository lookifyRepository) {
		this.lookifyRepository = lookifyRepository;
	}


	// returns all the Language
    public List<Lookify> allLookify() {
        return lookifyRepository.findAll();
    }


    // creates a Lookify
    public Lookify createLookify(Lookify lookify) {
        return lookifyRepository.save(lookify);
    }


	// retrieves a Lookify
	public Lookify findLookify(Long id) {
		Optional<Lookify> optionalLookify = lookifyRepository.findById(id);
		if (optionalLookify.isPresent()) {
			return optionalLookify.get();
		} else {
			return null;
		}
	}


	public List<Lookify> findArtist(String artist){
		return lookifyRepository.findByArtist(artist);
	}


	public List<Lookify> topTenSongs(){
		return lookifyRepository.findTop10ByOrderByRatingDesc();
	}


	//update Lookify 
	public Lookify updateLookify(Lookify lookify, Long id){
		Lookify x =lookifyRepository.findById(id).get();
		
		x.setTitle(lookify.getTitle());
		x.setArtist(lookify.getArtist());
		x.setRating(lookify.getRating());
		return lookifyRepository.save(x);
	}


	//delete Lookify 
	public void deleteLookify(Long id) {
		lookifyRepository.deleteById(id);
	}
}