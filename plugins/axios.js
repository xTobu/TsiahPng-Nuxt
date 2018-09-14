export default function({ $axios, redirect }) {
    $axios.baseURL = 'https://tsiahpng.appspot.com/api'
	$axios.onRequest(config => {
		config.headers['Accept'] = 'application/json';
		config.headers['Content-Type'] =
			'application/x-www-form-urlencoded; charset=utf-8';
		// 傳送 cookies
		config.withCredentials = false;
		// config.credentials = '*';

		if (process.client) console.warn('🌸 $axios request : ' + config.url);
	});

	$axios.onResponse(response => {
		// 判斷奇禾的 response.data.result ,如果是false 則進入 Promise.reject
		
		if (response.data.result === false) {
			if (process.client) console.error('💥 $axios catch : ', response);
			return Promise.reject(response);
		}
	});

	// $axios.onError(error => {
	// 	const code = parseInt(error.response && error.response.status);
	// 	if (code === 400) {
	// 		redirect('/400');
	// 	}
	// });
}
