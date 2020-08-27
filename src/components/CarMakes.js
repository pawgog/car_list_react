import React from 'react';
import { useFetchCarsSelect } from './FetchAPI';

function CarMake({ url, options, nameCar, selectMakeFn }) {
  const { loading, data, error } = useFetchCarsSelect(url, options);
  console.log(error);
  return(
    <>
    {error !== null ? 
      <h1>Service unavailable! Please reload page once again or try later.</h1>
    : loading ? 
      <h1>Loading</h1>
      : 
      <>
        <h2>Select make</h2>
        <div>
          {data.map((makeCar) => {
            return (
              <button
                key={makeCar}
                type="button"
                name={makeCar}
                className={makeCar === nameCar ? 'car-list__button-border--visible': ''}
                onClick={(e) => {
                  selectMakeFn(e);
                }}
              >
                {makeCar}
              </button>
            );
          })}
        </div>
      </>
    }
    </>
  )
}

export default CarMake;