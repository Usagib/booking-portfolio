const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

const initialState = [
  {
    date: '',
    time: '',
    description: '',
    service_id: '',
  }
];

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return [...state, action.appointment];
    case REMOVE_BOOK:
      return state.filter(appointment => appointment.date !== action.appointment.date );
    default:
      return state;
  }
};

export default appointmentReducer;
