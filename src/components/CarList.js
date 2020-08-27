import React from 'react';
import { useFetchCarsSelect } from './FetchAPI';

function CarList({ url, options }) {
  const { loading, data, error } = useFetchCarsSelect(url, options);
  return(
    <>
    {error !== null ? 
      <h1>Service unavailable! Please reload page once again or try later.</h1>
    : loading ? 
      <h1>Loading</h1>
      : 
      <>
      <h2>Selected vehicle</h2>
        <div className="car-list__list-container">
          {data.length > 0 ? 
            data.map((vehicle, index) => {
              return (
                <div key={index} className="car-list__list-container__content">
                  <div>{vehicle.make} {vehicle.model}</div>
                  <div>Type: {vehicle.bodyType}</div>
                  <div>{vehicle.enginePowerPS} PS / {vehicle.enginePowerKW} kW</div>
                  <div>Engine Capacity: {vehicle.engineCapacity}cc</div>
                  <div>Fuel type: {vehicle.fuelType}</div>
                </div>
              );
            })
          : <div className="car-list__list-container__content">
              <h4>There is no items!</h4>
            </div>
          }
        </div>
      </>
    }
    </>
  )
}

export default CarList;