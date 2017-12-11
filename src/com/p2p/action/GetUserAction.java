package com.p2p.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.UserDAO;
import com.p2p.entity.User;

public class GetUserAction extends ActionSupport {

	private UserDAO userDAO ;
	private List<User> allUser;
	private int start;
	private int limit;
	private int recordSize;
	
	public String execute() throws Exception{
		/**
		 * 1.假分�?,先取得全部数据然后设置显示大�?
		 * 优点：小型�?�度快，大型速度�?
		 */
		/*allUser = userDAO.findAll();
		
		//记录�?
		setRecordSize(allUser.size());
		
		int end = start + limit ;
		if(end >= allUser.size()){
			end = allUser.size();
		}
		allUser = allUser.subList(start, end);*/
		
		/**
		 * 2.真分�? ,每次从数据库中取出每页大小的数据
		 * 
		 */
		allUser = userDAO.findAll(start, limit);
		System.out.println(allUser.size());
		//记录�?
		setRecordSize(userDAO.findAll().size());
		return this.SUCCESS;
	}
	
	public int getRecordSize() {
		return recordSize;
	}
	public void setRecordSize(int recordSize) {
		this.recordSize = recordSize;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public List<User> getAllUser() {
		return allUser;
	}
	public void setAllUser(List<User> allUser) {
		this.allUser = allUser;
	}
	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
}
