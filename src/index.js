import {createStore} from "redux";

const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;
const plus = "plus"
const minus = "minus";


const countModifier = (count = 0, action) => {

  switch(action.type){
    case plus:
      return count+1;
    case minus:
      return count-1;
    default:
      return count;
  }
  
};

const count = createStore(countModifier);

const onChange = () => {
  number.innerText = count.getState();
};

count.subscribe(onChange);

plusButton.addEventListener("click", ()=> count.dispatch({type: plus}));
minusButton.addEventListener("click", ()=> count.dispatch({type: minus}));

