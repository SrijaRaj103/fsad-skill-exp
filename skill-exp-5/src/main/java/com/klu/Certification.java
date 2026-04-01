package com.klu;

import org.springframework.stereotype.Component;

@Component
public class Certification {

    private int id = 201;
    private String name = "Spring Framework Certification";
    private String dateOfCompletion = "20-March-2026";

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDateOfCompletion() {
        return dateOfCompletion;
    }
}