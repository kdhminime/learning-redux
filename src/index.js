import {createStore} from "redux";

const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const number = document.querySelector("span");


const countModifier = (state) => {
  
  return 0;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());