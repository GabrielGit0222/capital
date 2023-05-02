import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  changeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state

    const countryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )
    return countryAndCapital.country
  }

  render() {
    const {capitalId} = this.state
    const county = this.getCountry(capitalId)

    return (
      <div className="container_1">
        <div className="container_2">
          <h1 className="heading">Countries And Capitals </h1>
          <div className="select_container">
            <select value={capitalId} onChange={this.changeCapital}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="heading_1">is capital of which country?</p>
          </div>
          <p>{county}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
