package com.p2p.action;

import java.util.List;
import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.MovieDao;
import com.p2p.dao.UserDAO;
import com.p2p.entity.Movie;
import com.p2p.entity.User;

public class GetBookAction extends ActionSupport {

	private MovieDao movieDAO ;
	private List<Movie> allBook;
	private int start;
	private int limit;
	private int recordSize;
	
	@SuppressWarnings("unchecked")
	public String execute() throws Exception{
		/**
		 * 1.假分�?,先取得全部数据然后设置显示大�?
		 * 优点：小型�?�度快，大型速度�?
		 */
		/*allBook = movieDAO.findAll();
		
		//记录
		setRecordSize(allBook.size());
		
		int end = start + limit ;
		if(end >= allBook.size()){
			end = allBook.size();
		}
		allBook = allBook.subList(start, end);*/
		
		/**
		 * 2.真分�? ,每次从数据库中取出每页大小的数据
		 * 
		 */
		allBook = movieDAO.findAll(start, limit);
		System.out.println("allBook: "+allBook.size());
		System.out.println("movieDAO.findAll().size(): "+movieDAO.findAll().size());
		//记录�?
		setRecordSize(movieDAO.findAll().size());
		return this.SUCCESS;
	}

	public List<Movie> getAllUser() {
		return allBook;
	}
	public void setAllUser(List<Movie> allBook) {
		this.allBook = allBook;
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
	public int getRecordSize() {
		return recordSize;
	}
	public void setRecordSize(int recordSize) {
		this.recordSize = recordSize;
	}
	public void setMovieDAO(MovieDao movieDAO) {
		this.movieDAO = movieDAO;
	}
	
}

