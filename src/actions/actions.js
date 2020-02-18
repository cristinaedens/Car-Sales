export const ADD_ITEM = "ADD_ITEM";

export function addItem(item){
  console.log("added item here", item);
  return {
    type: ADD_ITEM,
    payload: item
  } //this closes add function return
} //this closes add function

export const REMOVE_ITEM = "REMOVE_ITEM";

export function removeItem(item){
  console.log("this item is removed", item);
  return {
    type: REMOVE_ITEM,
    payload: item
  } //this closes remove function return
} //this closes remove function