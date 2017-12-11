package com.p2p.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.UserDAO;
import com.p2p.entity.User;

public class UserAddAction extends ActionSupport {

	private String username;
	private String password;
	private String repassword;
	private String age;
	private String sex;
	private boolean success;
	private String msg;
	private UserDAO userDAO;
	
	public String execute() throws Exception{
		if(repassword != null && password != null && repassword.equals(password)){
			//判断用户名是否存在?
			List users = userDAO.findByUsername(username);
			if(users.size() == 0){
				//如果不存在，则直接保存?
				User user = new User();
				user.setUsername(username);
				user.setPassword(password);
				user.setSex(sex);
				user.setAge(age);
				userDAO.save(user);
				success = true ;
				msg = "用户注册成功" ;
			}else {
				success = false ;
				msg = "用户名已经存在,请输入其他用户名";
			}
		}else {
			success = false ;
			msg = "密码和确认密码不同！";
		}
		return this.SUCCESS;
	}
	
	public String getRepassword() {
		return repassword;
	}
	public void setRepassword(String repassword) {
		this.repassword = repassword;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
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
