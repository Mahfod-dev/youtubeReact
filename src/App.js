import React, { Component } from 'react'
import './App.css'

import 'semantic-ui-react'

import SearchBar from './components/SearchBar'
import youtube from './api/youtube'

import VideoList from './components/VideoList'

class App extends Component {
	state = {
		videos: [],
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		})

		this.setState({ videos: response.data.items })
	}

	render() {
		console.log(this.state.videos)
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

export default App
