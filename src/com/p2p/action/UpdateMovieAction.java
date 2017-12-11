package com.p2p.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.MovieDao;
import com.p2p.entity.Movie;
import com.p2p.entity.User;

public class UpdateMovieAction extends ActionSupport{

	private String moviename;
	private String movieimageUrl;
	private String grade;
	private boolean success;
	private String msg;
	private MovieDao movieDAO;
	
	public String execute() throws Exception{
		System.out.println("moviename:"+moviename);
		System.out.println("grade:"+grade);
		
		//判断用户名是否存在?
		List<Movie> movies = movieDAO.findByMoviename(moviename);
		if(movies.size() != 0){
			//如果不存在，则直接保存?
			movies.get(0).setGrade(grade);
			movieDAO.updateImplement(movies.get(0));
			success = true ;
			msg = "影片评分成功" ;
		}else {
			success = false ;
			msg = "影片评分失败";
		}
		success = true ;
		msg = "影片评分成功" ;
		return this.SUCCESS;
	}
	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}
	public String getMovieimageUrl() {
		return movieimageUrl;
	}
	public void setMovieimageUrl(String movieimageUrl) {
		this.movieimageUrl = movieimageUrl;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
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
	public void setMovieDAO(MovieDao movieDAO) {
		this.movieDAO = movieDAO;
	}
	public MovieDao getMovieDAO() {
		return movieDAO;
	}
}
