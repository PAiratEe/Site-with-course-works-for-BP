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
    private String ShortDescription;

    @Column(name = "longdescription")
    private String longDescription;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId", referencedColumnName = "departmentId")
    private Department department;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "professorid", referencedColumnName = "professorId")
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
        return this.ShortDescription;
    }

    public String getLongDescription() {
        return this.longDescription;
    }

    public void setShortDescription(String ShortDescription) {
        this.ShortDescription = ShortDescription;
    }

    public void setLongDescription(String Description) {
        this.longDescription = Description;
    }
}
