import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useFetchCarsSelect } from './FetchAPI';

function CarList({ url, options }) {
  const { loading, data, engineCapacityMax, error } = useFetchCarsSelect(
    url,
    options
  );
  const itemsOnPage = 12;

  const [page, setPage] = useState(itemsOnPage);
  const [range, setRange] = useState(0);
  const [selectData, setSelectData] = useState([]);
  const [selectDataSum, setSelectDataSum] = useState([]);

  const engineCapacitySelect = data.map((vehicle) => {
    return vehicle.engineCapacity;
  });

  const maxEngineCapacity = Math.max(...engineCapacitySelect);
  const minEngineCapacity = Math.min(...engineCapacitySelect);

  const filterData = data.filter((vehicle) => vehicle.engineCapacity <= range);

  useEffect(() => {
    setRange(engineCapacityMax);
  }, [engineCapacityMax]);

  useEffect(() => {
    data.sort((a, b) => b.engineCapacity - a.engineCapacity);
    setSelectData(data.slice(0, itemsOnPage));
    setSelectDataSum(data);
  }, [data]);

  const loadMoreData = () => {
    setPage((prevState) => {
      setSelectData(filterData.slice(0, prevState + itemsOnPage));
      return prevState + itemsOnPage;
    });
  };

  const slideChange = (e) => {
    setRange(e.target.value);
    setPage(itemsOnPage);
    setSelectData(filterData.slice(0, itemsOnPage));
    setSelectDataSum(filterData);
  };

  console.log(
    selectDataSum,
    data.length > page,
    selectDataSum.length > page,
    selectData.length >= itemsOnPage
  );

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
          <h2>Selected vehicle</h2>
          <div className="car-list__list-container__input-range">
            <input
              type="range"
              min={minEngineCapacity}
              max={maxEngineCapacity}
              value={range}
              onChange={(e) => slideChange(e)}
            />
            <output className="car-list__list-container__label">
              {range}cc
            </output>
          </div>

          <div className="car-list__list-container">
            {data.length > 0 ? (
              selectData.map((vehicle, index) => {
                return (
                  <div
                    key={index}
                    className="car-list__list-container__content"
                  >
                    <div>
                      {vehicle.make} {vehicle.model}
                    </div>
                    <div>Type: {vehicle.bodyType}</div>
                    <div>
                      {vehicle.enginePowerPS} PS / {vehicle.enginePowerKW} kW
                    </div>
                    <div>Engine Capacity: {vehicle.engineCapacity}cc</div>
                    <div>Fuel type: {vehicle.fuelType}</div>
                  </div>
                );
              })
            ) : (
              <div className="car-list__list-container__content">
                <h4>There is no items!</h4>
              </div>
            )}
          </div>
          {data.length > page &&
          selectDataSum.length > page &&
          selectData.length >= itemsOnPage ? (
            <button
              className="car-list__list-container__btn"
              onClick={() => loadMoreData()}
            >
              Load more vehicles...
            </button>
          ) : null}
        </>
      )}
    </>
  );
}

export default CarList;
