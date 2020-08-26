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
      <>
        <div>
          <CarMakes url="/makes" selectMakeFn={this.selectMake} />
          <CarModels url={`/models?make=${nameCar}`} selectModelFn={this.selectModel} />
          <CarList url={`/vehicles?make=${nameCar}&model=${nameModel}`} />
        </div>
      </>
    );
  }
}

export default Dashboard;