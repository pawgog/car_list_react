import React, { useState, useEffect } from 'react';
import { useFetchCarsSelect } from './FetchAPI';

function CarModels({ url, options, selectModelFn }) {
  const { loading, data, error } = useFetchCarsSelect(url, options);
  return(
    <>
      <div>
        <h2>Select model</h2>
        <div>
          {data.map((modelCar) => {
            return (
              <button
                key={modelCar}
                type="button"
                name={modelCar}
                onClick={(e) => {
                  selectModelFn(e);
                }}
              >
                {modelCar}
              </button>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default CarModels;