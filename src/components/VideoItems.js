import React from 'react'
import './videoItem.css'

const VideoItems = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className='video-item item'>
			<img
				className='ui image'
				src={video.snippet.thumbnails.medium.url}
				alt='video'
			/>
			<div className='content'>
				<div className='header'> {video.snippet.title}</div>
			</div>
		</div>
	)
}

export default VideoItems
