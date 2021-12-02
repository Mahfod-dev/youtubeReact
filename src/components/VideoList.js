import React from 'react'
import VideoItems from './VideoItems'

const VideoList = ({ videos }) => {
	const renderedVideo = videos.map((video) => {
		return <VideoItems />
	})

	return <div>{renderedVideo}</div>
}

export default VideoList
