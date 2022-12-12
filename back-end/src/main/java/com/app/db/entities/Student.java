package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Student",schema = "projectschema")
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentid")
    private Integer studentId;

    @Column(name = "studentname")
    private String studentName;
    @Column(name = "studentsurname")
    private String studentSurname;
    @Column(name = "studentpatronymic")
    private String studentPatronymic;
    @Column(name = "studentemail")
    private String studentEmail;

    @Column(name = "studentcoursenumber")
    private Integer studentCourseNumber;

    @Column(name = "studentcoursename")
    private String studentCourseName;
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


    public Integer getId() {
        return this.studentId;
    }

    public String getStudentName() {
        return this.studentName;
    }

    public String getStudentSurname() {
        return this.studentSurname;
    }

    public String getStudentPatronymic() {
        return this.studentPatronymic;
    }

    public String getStudentEmail() {
        return this.studentEmail;
    }

    public Integer getStudentCourseNumber() {
        return this.studentCourseNumber;
    }

    public void setId(Integer id) {
        this.studentId = id;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public void setStudentSurname(String studentSurname) {
        this.studentSurname = studentSurname;
    }

    public void setStudentPatronymic(String studentPatronymic) {
        this.studentPatronymic = studentPatronymic;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public void setStudentCourseNumber(Integer studentCourseNumber) {
        this.studentCourseNumber = studentCourseNumber;
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
        return this.studentCourseName;
    }

    public void setStudentCourseName(String StudentCourseName) {
        this.studentCourseName = StudentCourseName;
    }
}
