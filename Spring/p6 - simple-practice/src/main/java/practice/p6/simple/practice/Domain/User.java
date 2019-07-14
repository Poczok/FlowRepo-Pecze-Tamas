package practice.p6.simple.practice.Domain;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    public User() {
    }
    @Column
    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User(String name) {
        this.name = name;
    }
}
