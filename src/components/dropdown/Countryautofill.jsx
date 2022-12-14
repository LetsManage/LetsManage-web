import React from 'react';
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries : [],
            states : [],
            cities : [],
            selectedCountry : 'Country',
            selectedState : 'State'
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }
   
    componentDidMount() { //https://reactjs.org/docs/react-component.html#componentdidmount
        this.setState({
            countries : [
                { name: 'Web Development', states: [ 
                    {name: 'PHP'},
                    {name: 'NodeJs'},
                    {name: 'Paythone'},
                    {name: 'Java'}
                ]},
                { name: 'Mobile Development', states: [ 
                  {name: 'Android'},
                  {name: 'Flutter'},
                  {name: 'React Native'}
              ]},
              { name: 'Event & Marketing', states: [ 
                {name: 'Road Show'},
                {name: 'BTL Activation'},
                {name: 'PR & Media'},
                {name: 'Coroporate Activation & Exabition'}
            ]},
            { name: 'Graphic Design', states: [ 
              {name: 'Logo Design'},
              {name: 'Video Editing'},
              {name: 'Flayer/Banner/Flex Design'}
          ]},
            ]
        });
    }
   
    changeCountry(event) {
        this.setState({selectedCountry: event.target.value});
        this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    }
 
    changeState(event) {
        this.setState({selectedState: event.target.value});
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
    }
     
    render() {
        return (
            <div className="">
                <div className="row">
                {/* <h2>ReactJS Dependent Dropdown - Country, State and City</h2> */}
     
                <div className="form-group mb-5">
                    {/* <label style={styles.lbl}>Country</label> */}
                    <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>-- Selecat Catagory --</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="form-group">
                    {/* <label style={styles.lbl}>State</label> */}
                    <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>-- Selecat Sub Catagory --</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                {/* <div className="form-group">
                    <label style={styles.lbl}>City</label>
                    <select className="form-select" placeholder="City">
                        <option>City</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div> */}
                {/* <button type="submit" className="btn btn-success" style={styles.btn}>Submit</button> */}
                </div>
            </div>
        )
    }
}
 
export default App;
 
// Just some styles

