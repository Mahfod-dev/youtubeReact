import React from 'react'
import VideoItems from './VideoItems'

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedVideo = videos.map((video) => {
		return <VideoItems onVideoSelect={onVideoSelect} video={video} />
	})

	return <div className='ui relaxed divided list'>{renderedVideo}</div>
}

export default VideoList
