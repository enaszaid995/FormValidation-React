import  {useState} from "react";
const useInput=(validateFunction)=>{
    const [enteredValue , setEnteredValue]=useState('');
    const [isTouch , setIsTouch]=useState(false);

    const EnteredValueIsValid = validateFunction(enteredValue) && isTouch;

    const getValueInput = (event)=>{
    
        setEnteredValue(event.target.value);
      }
    
      const getIsTouch = () =>{
        setIsTouch(true);
      }

      const reset=()=>{
        setEnteredValue('');
        setIsTouch(false);
      }

      return {
        enteredValue ,
        isTouch,
        EnteredValueIsValid,
        getValueInput,
        getIsTouch,
        reset
      }
}
export default useInput;