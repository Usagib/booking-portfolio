const ADD_SERVICE = 'ADD_SERVICE';
const REMOVE_SERVICE = 'REMOVE_SERVICE';

const initialState = [
  {
    name: '',
    description: '',
    max_cost: 0,
    min_cost: 0,
    image_url: '',
    user_id:'',
  }
];

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, action.service];
    case REMOVE_SERVICE:
      return state.filter(service => service.name !== action.service.name );
    default:
      return state;
  }
};

export default serviceReducer;
