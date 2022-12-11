package com.app.db.entities;

import jakarta.persistence.*;
@Entity
@Table(name = "CourseWork")
public class CourseWork {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long courseWorkId;

    private String title;
    private String requirements;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId", referencedColumnName = "courseWorkId")
    private Department department;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "professorId", referencedColumnName = "courseWorkId")
    private Professor professor;

    public Long getCourseWorkId() {
        return this.courseWorkId;
    }

    public String getTitle() {
        return this.title;
    }

    public String getRequirements() {
        return this.requirements;
    }

    public void setCourseWorkId(Long courseWorkId) {
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
}
