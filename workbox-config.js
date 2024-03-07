module.exports = {
	globDirectory: 'mm/',
	globPatterns: [
		'**/*.{html,json}'
	],
	swDest: 'mm/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};