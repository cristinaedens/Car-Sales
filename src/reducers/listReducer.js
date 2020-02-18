import {ADD_ITEM} from "../actions/actions";
import {REMOVE_ITEM} from "../actions/actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },//this closes car object
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]//this closes additionalFeatures
}; //This closes initialState

export const listReducer = (state = initialState, action) => {
console.log("Reducer..")

switch (action.type) {
  case ADD_ITEM:
    return {...state,
    car: {...state.car,
    features: [...state.car.features, action.payload]
  },//this closes add_item car features
  additionalFeatures: state.additionalFeatures.filter((event) => event.id !== action.payload.id)
}//this closes add_item return
case REMOVE_ITEM:
  return{
    ...state,
    car: {...state.car,
    features: [...state.car.features.filter(item => (item !== action.payload))]
  }//this closes remove_item car features
  }//this closes remove_item return
  default:
    return state;
}//this closes add_item switch
}//this closes reducer