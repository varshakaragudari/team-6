package com.Natwest.Bank.Model;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.extern.apachecommons.CommonsLog;
import org.springframework.stereotype.Component;


@Component
public class AuthRequest {

    private String userName;
    private String password;
	public AuthRequest(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	public AuthRequest() {
		super();
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "AuthRequest [userName=" + userName + ", password=" + password + "]";
	}
    
    
    
}
