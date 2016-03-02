import api from '../api';

export function loadDiscs(discs) {
	return {
		type: 'DISCS_LOAD',
		payload: discs
	}
}

export function getDiscs() {
	console.log("getDiscs");
	return function(dispatch, getState) {
		api.getDiscs().then(discs => {
			console.log("FOO");
			return dispatch(loadDiscs(discs));
		}).catch((response) => {
			console.log(JSON.stringify(response));
		});
	};
}