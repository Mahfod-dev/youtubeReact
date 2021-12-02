import axios from 'axios'

const KEY = 'AIzaSyBSjXtVrZJBpGq8WyV0B-7_7Lre2fa2vho'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
})

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// const res = async (term) => {
// 	fetch(
// 		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${term}&key=${KEY}`
// 	)
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// }

// console.log(res('surfing'))
