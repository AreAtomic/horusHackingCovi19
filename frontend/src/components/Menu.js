
import React, { Component, Fragment } from 'react';
import '../App.css';


const Checkbox = props => (
    <input type="checkbox" {...props} />
  )

const items = [
  'Sport',
  'Minecraft',
  'Valorant',
  'Fortnite',
  'Minecraft',
  'Jeux-vidéo',
  'Cours'
];

class Application extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }
    
      toggleCheckbox = label => {
          this.selectedCheckboxes.add(label);
      }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log(this.selectedCheckboxes)
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <div className="name-filtre">
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
                name={label}
            />
        <label for={label}>{label}</label>
    </div>
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <Fragment>
            <form onSubmit={this.handleFormSubmit} className="filtrer">
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Filtrer</button>
            </form>
      </Fragment>
    );
  }
}

export default Application;


