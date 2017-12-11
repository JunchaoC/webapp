package com.p2p.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.MovieDao;
import com.p2p.dao.UserDAO;
import com.p2p.entity.Movie;
import com.p2p.entity.User;

public class MovieAction extends ActionSupport{

	private String moviename;
	private String movieimageUrl;
	private String grade;
	private boolean success;
	private String msg;
	private MovieDao movieDao;
	private List<Movie> allMovie;
	
	public String execute() throws Exception{
			System.out.println("moviename:"+moviename);
			//查询所有电影
			allMovie = movieDao.findAll();
			
			//判断用户名是否存在?
			List movieList = movieDao.findByMoviename(moviename);
			if(movieList.size() == 0){
				success = false ;
				msg = "电影不存在" ;
			}else {
				Movie movie = (Movie)movieList.get(0);
				moviename = movie.getMoviename();
				movieimageUrl =  movie.getMovieimageUrl();
				grade = movie.getGrade();
				
				success = true ;
				msg = "查询成功";
			}
		return this.SUCCESS;
	}
	
	//初始化方法
	private String init() throws Exception{
		//查询所有电影
		allMovie = movieDao.findAll();
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
	public void setMovieDAO(MovieDao movieDao) {
		this.movieDao = movieDao;
	}
	public List<Movie> getAllMovie() {
		return allMovie;
	}
	public void setAllMovie(List<Movie> allMovie) {
		this.allMovie = allMovie;
	}
}
