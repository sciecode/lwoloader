const header =
`/**
 * @version 1.0.0
 *
 * @author Lewy Blue https://github.com/looeee
 * @author Guilherme Avila https://github/sciecode
 *
 * @desc Load files in LWO3 and LWO2 format on Three.js
 *
 * LWO3 format specification:
 * 	http://static.lightwave3d.com/sdk/2018/html/filefmts/lwo3.html
 *
 * LWO2 format specification:
 * 	http://static.lightwave3d.com/sdk/2018/html/filefmts/lwo2.html
 *
 * Development and test repository:
 *	https://github.com/threejs/lwoloader-test-models
 *
 **/
 `


export default {
	input: 'src/Loader.js',
	output:
		{
			format: 'iife',
			name: 'THREE.LWOLoader',
			file: 'build/js/LWOLoader.js',
			indent: '\t',
			banner: header
		}
};
