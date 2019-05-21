let API_KEY;

/**
 * Based on react-native-geocoding
 */

/**
 * Module to use google's place search.
 */
let PlaceSearch;
export default PlaceSearch = {
	options : {},

	/**
	 * Initialize the module.
	 * @param {String} apiKey The api key of your application in google.
	 * @see https://developers.google.com/maps/documentation/geocoding/intro#geocoding
	 */
	init(apiKey, options){
		API_KEY = apiKey || "AIzaSyADghHhTlMYoftUuAaFPG3GR9Kxuj2CPII";
		this.options = options || {};
	},

	/**
	 * @returns {boolean} True if the module has been initiated. False otherwise.
	 */
	get isInit(){
		return !! API_KEY;
	},

	/**
	 * @see {@link PlaceSearch.init}
	 * @deprecated
	 */
	setApiKey(API_KEY) {
		this.init(API_KEY);
	},

	/**
	 * Accepted parameters:
	 * <ul>
	 *     <li>from(Number latitude, Number longitude)</li>
	 *     <li>from(Array [latitude, longitude])</li>
	 *     <li>from(Object {latitude, longitude})</li>
	 *     <li>from(Object {lat, lng})</li>
	 *     <li>from(String address)</li>
	 * </ul>
	 * @returns {Promise.<Object>} Object containing informations about the place at the coordinates.
	 * @see https://developers.google.com/places/web-service/search
	 */
	async from(...params) {
		// check api key
		if (!PlaceSearch.isInit)
			throw {
				code : PlaceSearch.Errors.NOT_INITIATED,
				message : "PlaceSearch isn't initialized. Call PlaceSearch.init function (only once), passing it your app's api key as parameter.",
			};

		// --- convert parameters ---
		let queryParams;

    console.log(params);

		// (latitude, longitude)
		if (!isNaN(params[0]) && !isNaN(params[1]) && !isNaN(params[2]) && (typeof params[3] === 'string'))
			queryParams = {
          location : `${params[0]},${params[1]}`,
          radius: `${params[2]}`,
          type: `${params[3]}`,
        };

		// --- start place search ---

		// check query params
		if (!queryParams)
		// no query params, means parameters where invalid
			throw {
				code : PlaceSearch.Errors.INVALID_PARAMETERS,
				message : "Invalid parameters : \n" + JSON.stringify(params, null, 2),
			};

		queryParams.key = API_KEY;
		if (this.options.language)
			queryParams.language = this.options.language;

		// build url
		const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${toQueryParams(queryParams)}`;

    // console.log(url);

		let response, data;

		// fetch
		try {
      response = await fetch(url);
		} catch(error) {
			throw {
				code : PlaceSearch.Errors.FETCHING,
				message : "Error while fetching. Check your network.",
				origin : error,
			};
		}

		// parse
		try {
			data = await response.json();
		} catch(error) {
			throw {
				code : PlaceSearch.Errors.PARSING,
				message : "Error while parsing response's body into JSON. The response is in the error's 'origin' field. Try to parse it yourself.",
				origin : response,
			};
		}

		// check response's data
		if (data.status !== 'OK')
			throw {
				code : PlaceSearch.Errors.SERVER,
				message : "Error from the server while place searching. The received datas are in the error's 'origin' field. Check it for more informations.",
				origin : data,
			};

      // console.log(data);

		return data;
	},

	/**
	 * Do <a href="https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding">reverse geocoding</a>, converting geographic coordinates into a human-readable address.
	 * Use {@link PlaceSearch.from} instead.
	 * @param {Number} lat Latitude coordinate.
	 * @param {Number} lng Longitude coordinate.
   * @param {Number} radius Radius of the search. Can use 1500.
   * @param {String} type String to be located (e.g. hospital, bar).
	 * @returns {Promise.<Object>} Object containing informations about the place at the coordinates.
	 * @see https://developers.google.com/maps/documentation/geocoding/intro#GeocodingResponses
	 * @deprecated
	 */
	getFromLatLng(lat, lng, radius, type){
		return this.from(lat, lng, radius, type);
	},

	/**
	 * All possible errors.
	 */
	Errors : {
		/**
		 * Module hasn't been initiated. Call {@link PlaceSearch.init}.
		 */
		NOT_INITIATED : 0,

		/**
		 * Parameters are invalid.
		 */
		INVALID_PARAMETERS : 1,

		/**
		 * Error wile fetching to server.
		 * The error.origin property contains the original fetch error.
		 */
		FETCHING : 2,

		/**
		 * Error while parsing server response.
		 * The error.origin property contains the response.
		 */
		PARSING : 3,

		/**
		 * Error from the server.
		 * The error.origin property contains the response's body.
		 */
		SERVER : 4,
	},
}

/**
 * Convert an object into query parameters.
 * @param {Object} object Object to convert.
 * @returns {string} Encoded query parameters.
 */
function toQueryParams(object){
	return Object.keys(object)
		.filter(key => !!object[key])
		.map(key => key + "=" + encodeURIComponent(object[key]))
		.join("&")
}