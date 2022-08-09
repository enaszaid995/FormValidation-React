import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName , setEnteredFirstName]=useState('');
  const [enteredSecondName , setEnteredSecondName]=useState('');
  const [enteredEmail, setEnteredEmail]=useState('');
  const[touchFirstName,setTouchFirstName]=useState(false);
  const[touchSecondName,setTouchSecondName]=useState(false);
  const[touchEmail,setTouchEmail]=useState(false);

  const enteredNameFirst= enteredFirstName.trim().length !== 0;
  const enteredNameLast= enteredSecondName.trim().length  !== 0;
  const enteredEmaill= enteredEmail.trim().length  !== 0;
  const EnteredFirstNameIsValid = enteredNameFirst && touchFirstName;
  const EnteredSecondNameIsValid = enteredNameLast&& touchSecondName;
  const EnteredEmailIsValid = enteredEmaill && touchEmail && enteredEmail.includes('@');

  let formIsValid=false;
  

  const firstNameClasses = EnteredFirstNameIsValid || !touchFirstName? 'form-control' :'form-control invalid';
  const lastNameClasses = EnteredSecondNameIsValid || !touchSecondName ? 'form-control' :'form-control invalid';
  const EmailClasses = EnteredEmailIsValid || !touchEmail ? 'form-control' :'form-control invalid';


  if(EnteredFirstNameIsValid && EnteredSecondNameIsValid && EnteredEmailIsValid){
    formIsValid=true;
  }

  const getFirstNAme = (event)=>{
    
    setEnteredFirstName(event.target.value);
  }

  const getFirstTouch = () =>{
    setTouchFirstName(true);
  }

  const getLasttNAme = (event)=>{
    
    setEnteredSecondName(event.target.value);
  }

  const getLastTouch = () =>{
    setTouchSecondName(true);
  }

  const getEmail = (event)=>{
   
    setEnteredEmail(event.target.value);
  }

  const getemailTouch = () =>{
    setTouchEmail(true);
  }
  const submitHAndler=event=>{
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    alert('Login Success');
    setEnteredFirstName('');
    setEnteredSecondName('');
    setEnteredEmail('');
    setTouchFirstName(false);
    setTouchSecondName(false);
    setTouchEmail(false);
    formIsValid=false;
  }
  return (
  <form onSubmit={submitHAndler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={getFirstNAme} onBlur={getFirstTouch} value={enteredFirstName}/>
          {<p hidden={EnteredFirstNameIsValid || !touchFirstName} className='error-msg'>Please Enter Valid First Name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={getLasttNAme} onBlur={getLastTouch} value={enteredSecondName}/>
          {<p hidden={EnteredSecondNameIsValid || !touchSecondName} className='error-msg'>Please Enter Valid Last Name</p>}
         
        </div>
      </div>
      <div className={EmailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={getEmail}  onBlur={getemailTouch} value={enteredEmail}/>
        {<p hidden={EnteredEmailIsValid || !touchEmail} className='error-msg'>Please Enter Valid Email</p>}
       
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
