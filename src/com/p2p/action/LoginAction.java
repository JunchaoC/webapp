package com.p2p.action;

import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.UserDAO;
import com.p2p.entity.Admin;
import com.p2p.entity.Audience;
import com.p2p.entity.User;

public class LoginAction extends ActionSupport {
	private String username;
	private String password;
	private String randCode;
	private boolean success;
	private String msg;
	private UserDAO userDAO;
	
	private String login_role; 
	private String role;
	
	public String getRole() {
		return login_role;
	}
	public void setRole(String login_role) {
		this.login_role = login_role;
	}
	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
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
	public String getRandCode() {
		return randCode;
	}
	public void setRandCode(String randCode) {
		this.randCode = randCode;
	}
	
	public String execute() throws Exception {
		System.out.println("login_role:");
		System.out.println("login_role:"+login_role);
		//获取当前正确的验证码
		String rand = (String) ActionContext.getContext().getSession().get("rand");
		
		if(rand.equals(randCode)){
			if(Integer.parseInt(login_role)==0) { //限制用户
				role="Audience" ;
				//判断用户是否存在
				List list = userDAO.findByUsername2(role,username);
				if(list.size() == 0) {
					success = false;
					msg = "用户名不存在";
				} else {
					Audience user = (Audience)list.get(0);
					if(password.equals(user.getPassword())) {
						success = true;
						msg = "登录成功";
					}else {
						success = false;
						msg = "密码错误";
					}
				}
			}else if(Integer.parseInt(login_role)==1) { //普通用户
				role="User" ;
				//判断用户是否存在
				List list = userDAO.findByUsername2(role,username);
				if(list.size() == 0) {
					success = false;
					msg = "用户名不存在";
				} else {
					User user = (User)list.get(0);
					if(password.equals(user.getPassword())) {
						success = true;
						msg = "登录成功";
					}else {
						success = false;
						msg = "密码错误";
					}
				}
			}else if(Integer.parseInt(login_role)==2) { //管理员
				role="Admin" ;
				//判断用户是否存在
				List list3 = userDAO.findByUsername2(role,username);
				if(list3.size() == 0) {
					success = false;
					msg = "用户名不存在";
				} else {
					Admin admin = (Admin) list3.get(0);
					System.out.println("password:"+password);
					System.out.println("admin.getPassword()"+admin.getPassword());
					if(password.equals(admin.getPassword())) {
						success = true;
						msg = "登录成功";
					}else {
						success = false;
						msg = "密码错误";
					}
				}
			}
		} else {
			success = false;
			msg = "验证码错误";
		}
		return this.SUCCESS;
	}
	
	
}
