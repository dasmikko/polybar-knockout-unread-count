const axios = require('axios').default
const _filter = require('lodash/filter');

const myArgs = process.argv.slice(2);

function fetchCount () {
	axios.get('https://api.knockout.chat/user/syncData', {
		headers: {
			'Cookie': 'knockoutJwt=' + myArgs[0].split('=')[1]
		}
	}).then((response) => {
		let unreadItems = _filter(response.data.subscriptions, (o) => {
			return o.unreadPosts > 0
		})
		let unreadCount = 0

		unreadItems.forEach((item) => {
			unreadCount = unreadCount + item.unreadPosts
		})

		console.log(unreadCount)
	})
}

const main = async () => {
	fetchCount()
}

console.log(0)
main()

// Loop
setInterval(() => {
	main()
}, 1 * 10000)
