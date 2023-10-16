const { combineReducers } = require("redux");

const INITAL_STATE = {
	  user: [],
	  currentUserLoanData:[],
	  currentUserInstallmentData:[],
	  currentUser:{},
  };

export const dataReducer = (state=INITAL_STATE, action)=>{
	switch(action.type) {
		case 'SIGNUP_DATA' : {
			console.log(action.payload)
			return {...state, user: action.payload,currentUser: action.payload};
		}
		case 'LOGIN_DATA' :{
			console.log(action.payload)
			return {currentUser: action.payload};
		}
		case 'LOG_OUT':{
			return {currentUser:action.payload};
		}
		case'CURRENT_USER_LOAN_DATA':{
			console.log(action.payload)
			return {...state,currentUserLoanData: action.payload}
		}
		case'CURRENT_USER_INSTALLMENT_DATA':{
			console.log(action.payload)
			return {...state,currentUserInstallmentData: action.payload}
		}
		default : return state;
	}
}



const Reducers = combineReducers({
	data : dataReducer
})

export default Reducers;
