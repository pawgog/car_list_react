import React from 'react';
import Loading from './Loading';
import { useFetchCarsSelect } from './FetchAPI';

function CarModels({ url, options, nameModel, selectModelFn }) {
  const { loading, data, error } = useFetchCarsSelect(url, options);
  return (
    <>
      {error !== null ? (
        <h1>
          Service unavailable! Please reload page once again or try later.
        </h1>
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <h2>Select model</h2>
          <div>
            {data.length > 0 ? (
              data.map((modelCar) => {
                return (
                  <button
                    key={modelCar}
                    type="button"
                    name={modelCar}
                    className={
                      modelCar === nameModel
                        ? 'car-list__button-border--visible'
                        : ''
                    }
                    onClick={(e) => {
                      selectModelFn(e);
                    }}
                  >
                    {modelCar}
                  </button>
                );
              })
            ) : (
              <div>
                <h3>There is no models! Please select another car make.</h3>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default CarModels;
