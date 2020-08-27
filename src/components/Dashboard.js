import React from 'react';
import CarMakes from './CarMakes';
import CarModels from './CarModels';
import CarList from './CarList';

class Dashboard extends React.Component {
  state = {
    nameCar: '',
    nameModel: '',
  };

  selectMake = (e) => {
    const nameCar = e.target.name;
    this.setState({
      nameCar,
      nameModel: ''
    })
  };

  selectModel = (e) => {
    const nameModel = e.target.name;
    this.setState({
      nameModel,
    })
  };

  render() {
    const { nameCar, nameModel } = this.state;
    return (
      <div className="car-list__body">
        <CarMakes url="/makes" nameCar={nameCar} selectMakeFn={this.selectMake} />
        {nameCar !== '' ? <CarModels url={`/models?make=${nameCar}`} nameModel={nameModel} selectModelFn={this.selectModel} /> : null}
        {nameCar !== '' && nameModel ? <CarList url={`/vehicles?make=${nameCar}&model=${nameModel}`} /> : null}
      </div>
    );
  }
}

export default Dashboard;