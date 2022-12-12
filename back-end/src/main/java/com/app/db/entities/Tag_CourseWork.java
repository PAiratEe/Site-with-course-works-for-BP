package com.app.db.entities;


import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "Tag_CourseWork")
public class Tag_CourseWork {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tag_CourseWorkId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "courseworkid")
    private Collection<CourseWork> tag;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tagid")
    private Collection<Tag> coursework;

    public Collection<Tag> getCoursework() { return coursework; }

    public Collection<CourseWork> getTag() { return tag; }

    public void setTag(Collection<CourseWork> tag) { this.tag = tag; }

    public void setCoursework(Collection<Tag> coursework) { this.coursework = coursework; }




}
