import { Dispatch } from "redux";

export const fetchCars = (dispatch: Dispatch) => {
  fetch(`https://rent-cars-api.herokuapp.com/admin/car`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: "FETCH_CARS", payload: data }));
};

export const fetchCarDetails = (id: string=`2`, dispatch: Dispatch) => {
    fetch(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: "FETCH_CAR_DETAILS", payload: data }));
}


