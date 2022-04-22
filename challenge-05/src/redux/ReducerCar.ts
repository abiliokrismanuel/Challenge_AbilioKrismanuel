const initialState  = {
    cars:[],
    carDetails: {
        kapasitas: '4 Orang',
        transmisi: 'Manual',
        build : 'Tahun 2020'
}};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CARS':
            return {
                ...state,
                cars: action.payload
            };
        case 'FETCH_CAR_DETAILS':
            return {
                ...state,
                carDetails:{...state.carDetails, ...action.payload}, 
            };
        default:
            return state;
    }
};

export default carReducer;