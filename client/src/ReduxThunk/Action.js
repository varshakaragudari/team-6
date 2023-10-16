import axios from 'axios';

export const getmydata = () => {
	return async (dispatch, getState) => {
	  try {
		const response = await fetch('http://localhost:3000/signup');
		const data = await response.json();
		console.log(data)
		dispatch({
		  type: 'SIGNUP_DATA',
		  payload: data,
		});
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
};

export const getLoginmydata = () => {
	return async (dispatch, getState) => {
	  try {
		const loginResponse = await fetch('http://localhost:3000/login');
		const loginData = await loginResponse.json();
  
		
		const signupResponse = await fetch('http://localhost:3000/signup');
		const signupData = await signupResponse.json();
  
		
  
		const customerIdFromLogin = loginData.customerId;
		const isCustomerIdInSignup = signupData.some((signupItem) => signupItem.customerId === customerIdFromLogin);
  
		if (isCustomerIdInSignup) {
		  console.log('CustomerId is present in the signupData array.');
		  dispatch({
			type: 'LOGIN_DATA',
			payload: signupData[0],
		  });
		} else {
		  console.log('CustomerId is not present in the signupData array.');
		  dispatch({
			type: 'LOGIN_DATA',
			payload:'',
		  });
		}
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
  };
  
  export const Logout = () => {
	return (dispatch, getState) => {
	  try {
		dispatch({
		  type: 'LOG_OUT',
		  payload: {},
		});
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
};

  export const postLoanData = async (loanData) => {
	console.log(loanData)
	try {
	  const response = await axios.post('http://localhost:8080/loan', loanData, {
		headers: {
		  'Content-Type': 'application/json',
		},
	  });

	  console.log(response)
  
	  if (response.status === 200) {
		const data = response.data;
		console.log(data);
	  } else {
		console.error('Error:', response.statusText);
	  }
	} catch (error) {
	  console.error('Error fetching data:', error);
	}
  };

  export const postSignInData = (customerData) => {
	return (dispatch) => {
	  dispatch({
		type: 'SIGNUP_DATA',
		payload: customerData,
	  });
	};
  };

  export const postLoginInData = (customerData) => {
	return (dispatch) => {
	  dispatch({
		type: 'LOGIN_DATA',
		payload: customerData,
	  });
	};
  };

  export const getLoanDataByCustomerId = (user) => {
	console.log(user)
	// console.log(user
	return async (dispatch) => { // Removed getState argument as it's not used
	  try {
		const response = await axios.get(`http://localhost:8080/loan/byCustomerId/${user}`);
		// const data = response.data;
		console.log("Hello here is the Loan Data");
		console.log("Response from API:", response.data);
		dispatch({
		  type: 'CURRENT_USER_LOAN_DATA',
		  payload: response.data,
		});
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
  };
  

  export const getInstallmentDataByLoanId = (loanId)=>{
	console.log(loanId)
	return async (dispatch) => { // Removed getState argument as it's not used
	  try {
		const response = await axios.get(`http://localhost:8080/installments/findByLoanId/6520f2c0eacb0401dbd80747`);
		console.log("Hello here is the Installment Data");
		console.log("Response from API:", response.data);
		dispatch({
		  type: 'CURRENT_USER_INSTALLMENT_DATA',
		  payload: response.data,
		});
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
  }
  
  
  


