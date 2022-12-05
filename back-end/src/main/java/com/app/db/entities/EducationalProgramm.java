package com.app.db.entities;

import jakarta.persistence.*;
@Entity
@Table(name = "EducationalProgramm")
public class EducationalProgramm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
