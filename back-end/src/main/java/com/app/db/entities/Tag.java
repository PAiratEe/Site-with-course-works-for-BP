package com.app.db.entities;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "Tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tagId;

    @Column(name = "tagname")
    private String tagName;

    @Column(name = "tagdescription")
    private String tagDescription;


    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    private Tag_CourseWork tagid;


    public Long getId() {
        return this.tagId;
    }

    public String getTagName() { return tagName; }

    public String getTagDescription() { return tagDescription; }

    public void setId(Long id) {
        this.tagId = id;
    }

    public void setTagName(String tagName) { this.tagName = tagName; }

    public void setTagDescription(String tagDescription) { this.tagDescription = tagDescription; }

    public Tag_CourseWork getTagid() { return tagid; }

    public void setTagid(Tag_CourseWork tagid) { this.tagid = tagid; }
}
