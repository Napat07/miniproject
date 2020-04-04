import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import axios from 'axios'
import { getCountries, createCountry, deleteCountry, updateCountry } from './actions'
import { connect } from 'react-redux'
import CountryList from './CountryList'

class App extends Component {
	state = {
		name: '',
		lastname: '',
		position: '',
		age:''
	
	}

	componentDidMount() {
		this.props.getCountries()
		console.log(process.env.REACT_APP_PP)
	}

	handleChange = e => {
		var name = e.target.name,
			lastname = e.target.lastname,
			position = e.target.position,
			age = e.target.age,
			value = e.target.value
		this.setState({ [name]:value ,
						[lastname]:value,
						[position]:value,
						[age]:value})
	}

	handleSubmit = e => {
		e.preventDefault()
		const { name  , lastname , position , age} = this.state
		this.props.createCountry({
			name,lastname,position,age
		})
		this.setState({
			name: '',lastname:'', position:'' , age:''
		})
	}

	handleDelete = id => {
		this.props.deleteCountry(id)
	}

	handleUpdate = (id, name , lastname , position , age) => {
		this.props.updateCountry(id, {
			name , lastname , position , age
		})
	}


	render() {
		const { countries } = this.props
		return (
			<div className="con">
				<h1>Staff lists</h1>
				<ul>
					{countries.map((country, index) => {
						return <CountryList key={index} country={country} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
					})}
				</ul>
			
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
					<input type="text" name="lastname" placeholder="Lastname" onChange={this.handleChange} value={this.state.lastname} />
					<input type="text" name="position" placeholder="Position" onChange={this.handleChange} value={this.state.position} />
					<input type="number" name="age" placeholder="Age" onChange={this.handleChange} value={this.state.age} />
				
					<button type="submit">Add</button>
				</form>
			</div>

			
		)
	}
}

const mapStateToProps = ({ countries }) => {
	return {
		countries
	}
}
export default connect(
	mapStateToProps,
	{ getCountries, createCountry, deleteCountry, updateCountry }
)(App)
