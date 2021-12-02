import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'



class SearchBar extends Component {
	state = {
		term: '',
	}

	onChangeInput = (e) => {
		this.setState({ term: e.target.value })
	}
	onFormSubmit = (e) => {
		e.preventDefault()
		this.props.onTermSubmit(this.state.term)
	}

	render() {
		return (
			<Form onSubmit={this.onFormSubmit} className='search-bar ui segment'>
				<Form.Field>
					<label>Video Search</label>
					<input onChange={this.onChangeInput} value={this.state.term} />
				</Form.Field>
			</Form>
		)
	}
}

export default SearchBar
