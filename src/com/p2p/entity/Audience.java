package com.p2p.entity;

public class Audience  implements java.io.Serializable {

    private Integer id;
    private String username;
    private String password;
    private String age;
 	private String sex;

    public Audience() {
    }
    public Audience(String username, String password,String sex, String age) {
        this.username = username;
        this.password = password;
        this.sex = sex;
        this.age = age;
    }

    public Integer getId() {
        return this.id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getUsername() {
        return this.username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
}