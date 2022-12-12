package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "departmentId" )
    private Long departmentId;

    @Column(name = "departmentName")
    private String departmentName;

    public Long getId() {
        return this.departmentId;
    }

    public String getDepartmentName() {
        return this.departmentName;
    }

    public void setId(Long id) {
        this.departmentId = id;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
