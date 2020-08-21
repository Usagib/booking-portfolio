import React from 'react'

class ServiceSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesList: [
        '3d Printing',
        'Web Development',
        'Web Design',
        'Illustration',
        'Graphic Design',
        'Project Management',
        'Stationery Production',
        'Tech Support',
      ],
    };
  }

  render() {
    return (
      <div className="login-container">
        <div class="form-container d-flex align-items-center flex-column justify-content-center h-100 text-black">
          <h1 class="display-4">Services.</h1>
          <form>
              <div class="form-group">
                <select
                  name="selectService"
                  className="form-control"
                  id="selectService"
                >
                  {this.state.servicesList.map(services => (
                    <option key={services}>
                      {services}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p>service info</p>
                <p>Service max cost</p>
                <p>Service min cost</p>
                <p>service img</p>
              </div>
              <div class="form-group">
                  <input class="form-control form-control-lg" placeholder="Notes" type="text"/>
              </div>
              <div class="form-group">
                  <button class="btn btn-dark btn-lg btn-block">Select service</button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ServiceSelect
