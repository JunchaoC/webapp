package com.p2p.action;

import java.util.List;
import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.MovieDao;
import com.p2p.entity.Movie;

public class DeleteMovieAction extends ActionSupport{

	private String moviename;
	private boolean success;
	private String msg;
	private MovieDao movieDAO;
	
	public String execute() throws Exception{
		System.out.println("moviename:"+moviename);
		
		//判断电影是否存在?
		List movieList = movieDAO.findByMoviename(moviename);
		if(movieList.size() == 0) {
			success = false ;
			msg = "电影删除失败";
		}else {
			Movie movie = (Movie) movieList.get(0);
			movieDAO.deleteImplement(movie);
			success = true ;
			msg = "电影删除成功";
		}
		return this.SUCCESS;
	}
	
	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
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
	public MovieDao getMovieDAO() {
		return movieDAO;
	}
	public void setMovieDAO(MovieDao movieDAO) {
		this.movieDAO = movieDAO;
	}
}
