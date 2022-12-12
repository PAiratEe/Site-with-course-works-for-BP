package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Student")
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentId;

    @Column(name = "studentname")
    private String StudentName;
    @Column(name = "studentsurname")
    private String StudentSurname;
    @Column(name = "studentpatronymic")
    private String StudentPatronymic;
    @Column(name = "studentemail")
    private String StudentEmail;

    @Column(name = "studentcoursenumber")
    private Integer StudentCourseNumber;

    @Column(name = "studentcoursename")
    private String StudentCourseName;
    @Column(name = "studentpassword")
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "studentdepartment", referencedColumnName = "departmentId")
    private Department department;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "studentCourseWork", referencedColumnName = "courseworkId")
    private CourseWork courseWork;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "StudentEducationProgramm", referencedColumnName = "EducationProgrammId")
    private EducationProgramm educationProgramm;


    public Long getId() {
        return this.studentId;
    }

    public String getStudentName() {
        return this.StudentName;
    }

    public String getStudentSurname() {
        return this.StudentSurname;
    }

    public String getStudentPatronymic() {
        return this.StudentPatronymic;
    }

    public String getStudentEmail() {
        return this.StudentEmail;
    }

    public Integer getStudentCourseNumber() {
        return this.StudentCourseNumber;
    }

    public void setId(Long id) {
        this.studentId = id;
    }

    public void setStudentName(String studentName) {
        this.StudentName = studentName;
    }

    public void setStudentSurname(String studentSurname) {
        this.StudentSurname = studentSurname;
    }

    public void setStudentPatronymic(String studentPatronymic) {
        this.StudentPatronymic = studentPatronymic;
    }

    public void setStudentEmail(String studentEmail) {
        this.StudentEmail = studentEmail;
    }

    public void setStudentCourseNumber(Integer studentCourseNumber) {
        this.StudentCourseNumber = studentCourseNumber;
    }

    public Department getDepartment() {
        return this.department;
    }

    public CourseWork getCourseWork() {
        return this.courseWork;
    }

    public EducationProgramm getEducationProgramm() {
        return this.educationProgramm;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public void setCourseWork(CourseWork courseWork) {
        this.courseWork = courseWork;
    }

    public void setEducationProgramm(EducationProgramm educationProgramm) {
        this.educationProgramm = educationProgramm;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStudentCourseName() {
        return this.StudentCourseName;
    }

    public void setStudentCourseName(String StudentCourseName) {
        this.StudentCourseName = StudentCourseName;
    }
}
