package com.app.db.entities;

import javax.persistence.*;

@Entity
@Table(name = "CourseWork")
public class CourseWork {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String requirements;

    public Long getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getRequirements() {
        return this.requirements;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }
}
