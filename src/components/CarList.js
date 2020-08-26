import React, { useState, useEffect } from 'react';
import { useFetchCarsSelect } from './FetchAPI';

function CarList({ url, options }) {
  const { loading, data, error } = useFetchCarsSelect(url, options);
  return(
    <>
      <h2>Selected vehicle</h2>
      <div>
        {data.map((vehicle) => {
          return (
            <>
              <div>Make: {vehicle.make}</div>
              <div>Model: {vehicle.model}</div>
              <div>Engine Power PS: {vehicle.enginePowerPS}</div>
              <div>Engine Power KW: {vehicle.enginePowerKW}</div>
              <div>Fuel: {vehicle.fuelType}</div>
              <div>Body Type: {vehicle.bodyType}</div>
              <div>Engine Capacity: {vehicle.engineCapacity}</div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default CarList;