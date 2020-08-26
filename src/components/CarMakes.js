import React, { useState, useEffect } from 'react';
import { useFetchCarsSelect } from './FetchAPI';

function CarMake({ url, options, selectMakeFn }) {
  const { loading, data, error } = useFetchCarsSelect(url, options);
  return(
    <>
      <div>
        <h2>Select make</h2>
        <div>
          {data.map((makeCar) => {
            return (
              <button
                key={makeCar}
                type="button"
                name={makeCar}
                onClick={(e) => {
                  selectMakeFn(e);
                }}
              >
                {makeCar}
              </button>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default CarMake;