package com.p2p.entity;

public class Movie {

	private int Id;
	private String moviename;
	private String movieimageUrl;
	private String grade;
	
	//无参构造
	public Movie() {
	}
	//有参
	public Movie(int id, String moviename, String movieimageUrl, String grade) {
		Id = id;
		this.moviename = moviename;
		this.movieimageUrl = movieimageUrl;
		this.grade = grade;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
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
}
