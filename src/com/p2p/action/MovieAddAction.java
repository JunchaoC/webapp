package com.p2p.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.p2p.dao.MovieDao;
import com.p2p.dao.UserDAO;
import com.p2p.entity.Movie;
import com.p2p.entity.User;

public class MovieAddAction extends ActionSupport {

	private String moviename;
	private String movieimageUrl;
	private String grade;
	private boolean success;
	private String msg;
	private MovieDao movieDAO;
	
	private String book_name;
	private String book_url;
	private String book_publish;
    private	String UserFilePath;
    private String LoadImage;
	
	public String execute() throws Exception{
			System.out.println("LoadImage:"+LoadImage);
			System.out.println("book_url:"+book_url);
			//判断用户名是否存在?
			List movies = movieDAO.findByMoviename(book_name);
			if(movies.size() == 0){
				//如果不存在，则直接保存?
				Movie movie = new Movie();
				movie.setMoviename(book_name);
				movie.setMovieimageUrl(book_url);
				movie.setGrade(book_publish);
				movieDAO.save(movie);
				success = true ;
				msg = "用户注册成功" ;
			}else {
				success = false ;
				msg = "用户名已经存在,请输入其他用户名";
			}
			
		return this.SUCCESS;
	}

	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}
	public String getMovieimgaeUrl() {
		return movieimageUrl;
	}
	public void setMovieimgaeUrl(String movieimageUrl) {
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
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getBook_url() {
		return book_url;
	}
	public void setBook_url(String book_url) {
		this.book_url = book_url;
	}
	public String getBook_publish() {
		return book_publish;
	}
	public void setBook_publish(String book_publish) {
		this.book_publish = book_publish;
	}
	public String getUserFilePath() {
		return UserFilePath;
	}
	public void setUserFilePath(String userFilePath) {
		UserFilePath = userFilePath;
	}
	public String getLoadImage() {
		return LoadImage;
	}
	public void setLoadImage(String loadImage) {
		LoadImage = loadImage;
	}
}
