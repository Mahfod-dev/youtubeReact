import React, { Component } from 'react'
import './App.css'

import 'semantic-ui-react'

import SearchBar from './components/SearchBar'
import youtube from './api/youtube'

import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		})

		this.setState({ videos: response.data.items })
	}
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {
		console.log(this.state.videos)
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoDetails />
				<VideoList
					onVideoSelect={this.onVideoSelect}
					videos={this.state.videos}
				/>
			</div>
		)
	}
}

export default App
