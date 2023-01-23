import axios from "axios";

const axiosClient = axios.create({
	headers: {
		'X-RapidAPI-Key': 'f67a6ec0ffmsh5fbe2152f4cb7f7p1151adjsnc93ad2e77038',
    	'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
	},
});

// Interceptor
// Add a request interceptor
axios.interceptors.request.use(
	function (config: any) {
		// Do something before request is sent
		return config;
	},
	function (error: any) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response: any) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error: any) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default axiosClient;