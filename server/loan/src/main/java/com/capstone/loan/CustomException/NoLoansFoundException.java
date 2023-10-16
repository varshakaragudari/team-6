package com.capstone.loan.CustomException;

public class NoLoansFoundException extends RuntimeException {
	public NoLoansFoundException(String message) {
        super(message);
	}
}
