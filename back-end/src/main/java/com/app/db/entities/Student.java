package com.app.db.entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Student")
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentId;

    private String name;
    private String surname;
    private String patronymic;
    private String email;
    private Integer course;

    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId", referencedColumnName = "studentId")
    private Department department;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "courseWorkId", referencedColumnName = "studentId")
    private CourseWork courseWork;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "studentId")
    private EducationalProgramm educationalProgramm;


    public Long getId() {
        return this.studentId;
    }

    public String getName() {
        return this.name;
    }

    public String getSurname() {
        return this.surname;
    }

    public String getPatronymic() {
        return this.patronymic;
    }

    public String getEmail() {
        return this.email;
    }

    public Integer getCourse() {
        return this.course;
    }

    public void setId(Long id) {
        this.studentId = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCourse(Integer course) {
        this.course = course;
    }

    public Department getDepartment() {
        return this.department;
    }

    public CourseWork getCourseWork() {
        return this.courseWork;
    }

    public EducationalProgramm getEducationalProgramm() {
        return this.educationalProgramm;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public void setCourseWork(CourseWork courseWork) {
        this.courseWork = courseWork;
    }

    public void setEducationalProgramm(EducationalProgramm educationalProgramm) {
        this.educationalProgramm = educationalProgramm;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
