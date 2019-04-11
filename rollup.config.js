const header =
`/**
 * @author Lewy Blue https://github.com/looeee
 *
 * Load files in LWO3 and LWO2 format
 *
 * LWO3 format specification:
 * 	http://static.lightwave3d.com/sdk/2018/html/filefmts/lwo3.html
 *
 * LWO2 format specification:
 * 	http://static.lightwave3d.com/sdk/2018/html/filefmts/lwo2.html
 *
 * Development and Test repository:
 *	https://github.com/threejs/lwoloader-test-models
 *
 **/
 `


export default {
	input: 'src/Loader.js',
	output: [
		{
			format: 'esm',
			file: 'build/LWOLoader.js',
			indent: '\t',
			banner: header
		}
	]
};
