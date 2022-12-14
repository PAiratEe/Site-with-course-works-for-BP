package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "coursework",schema = "projectschema")
public class CourseWork {
    public CourseWork(){}
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "courseworkid")
    private Integer courseWorkId;

    @Column(name = "title")
    private String title;
    @Column(name = "requirements")
    private String requirements;

    @Column(name = "shortdescription")
    private String shortDescription;

    @Column(name = "longdescription")
    private String description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentid", referencedColumnName = "departmentid")
    private Department department;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "professorid", referencedColumnName = "professorid")
    private Professor professor;

    public Integer getCourseWorkId() {
        return this.courseWorkId;
    }

    public String getTitle() {
        return this.title;
    }

    public String getRequirements() {
        return this.requirements;
    }

    public void setCourseWorkId(Integer courseWorkId) {
        this.courseWorkId = courseWorkId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public Department getDepartment() {
        return this.department;
    }

    public Professor getProfessor() {
        return this.professor;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public String getShortDescription() {
        return this.shortDescription;
    }

    public String getDescription() {
        return this.description;
    }

    public void setShortDescription(String ShortDescription) {
        this.shortDescription = ShortDescription;
    }

    public void setDescription(String Description) {
        this.description = Description;
    }
}
