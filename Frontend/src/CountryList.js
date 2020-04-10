import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CountryList extends Component {
	state = {
		isEdit: false,
		name: this.props.country.name,
		lastname: this.props.country.lastname,
		position: this.props.country.position,
		age: this.props.country.age
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

	render() {
		const { country, onDelete, onUpdate } = this.props
		const { isEdit, name ,lastname,position,age} = this.state

		if (isEdit === true) {
			return (
				<li key={country.id}>
					{country.id}. <input type="text" name="name" value={name} onChange={this.handleChange} />
					<input type="text" name="lastname" value={lastname} onChange={this.handleChange} />
					<input type="text" name="position" value={position} onChange={this.handleChange} />
					<input type="number" name="age" value={age} onChange={this.handleChange} />
					
					<button class="btn btn-info"
						onClick={() => {
							onUpdate(country.id, name , lastname,position,age)
							this.setState({ isEdit: false })
						}}
					>
						Save
					</button>
					<button class="btn btn-warning" onClick={() => this.setState({ isEdit: false, 
															name: country.name , 
															lastname: country.lastname,
															position: country.position,
															age: country.age })}>Cancel</button>
				</li>
			)
		}

		if (isEdit === false) {
			return (
				<table align="center">
					<tr>
						<a key={country.id}>
						
							{country.id + '. ' + country.name + ' ' +'' + country.lastname + ' ' +': ' + country.position + ' '+': ' + country.age + ' '} 
					
					<button class="btn btn-warning" onClick={() => this.setState({ isEdit: true })}>Edit</button>
				<button class="btn btn-danger" onClick={() => onDelete(country.id)}>Delete</button> <br/>
				</a>
				</tr>
				</table>
			)
		}
	}
}
