/* get correct current path from refferer */
export const createRelativeUrl = (fullRoute, hostRoute) => {
	let finalRoute;
	if (fullRoute) {
		finalRoute = fullRoute.replace(hostRoute, '');
	} else {
		/* if referer is not set, we are on the home page */
		finalRoute = '/';
	}
	return finalRoute;
};
