export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND': 
    console.log({bands: state.bands.concat(action.payload)});
    return{
      ...state, bands: [...state.bands, action.band]
    };
    default: 
    return state;
  };

};
