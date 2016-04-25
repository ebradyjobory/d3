/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	let barchart = [{ 'letter': 'A', 'frequency': 0.08167 }, { 'letter': 'B', 'frequency': 0.01492 }, { 'letter': 'C', 'frequency': 0.02782 }, { 'letter': 'D', 'frequency': 0.04253 }, { 'letter': 'E', 'frequency': 0.12702 }, { 'letter': 'F', 'frequency': 0.02288 }, { 'letter': 'G', 'frequency': 0.02015 }, { 'letter': 'H', 'frequency': 0.06094 }, { 'letter': 'I', 'frequency': 0.06966 }, { 'letter': 'J', 'frequency': 0.00153 }, { 'letter': 'K', 'frequency': 0.00772 }, { 'letter': 'L', 'frequency': 0.04025 }, { 'letter': 'M', 'frequency': 0.02406 }, { 'letter': 'N', 'frequency': 0.06749 }, { 'letter': 'O', 'frequency': 0.07507 }, { 'letter': 'P', 'frequency': 0.01929 }, { 'letter': 'Q', 'frequency': 0.00095 }, { 'letter': 'R', 'frequency': 0.05987 }, { 'letter': 'S', 'frequency': 0.06327 }, { 'letter': 'T', 'frequency': 0.09056 }, { 'letter': 'U', 'frequency': 0.02758 }, { 'letter': 'V', 'frequency': 0.00978 }, { 'letter': 'W', 'frequency': 0.0236 }, { 'letter': 'X', 'frequency': 0.0015 }, { 'letter': 'Y', 'frequency': 0.01974 }, { 'letter': 'Z', 'frequency': 0.00074 }];

	let margin = { top: 20, right: 20, bottom: 20, left: 40 };
	let width = 960 - margin.left - margin.right;
	let height = 500 - margin.top - margin.bottom;

	let svg = d3.select('#barchart').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0, ' + height + ')');

	svg.append('g').attr('class', 'y axis').append('text') // just for the title (ticks are automatic)
	.attr('transform', 'rotate(-90)') // rotate the text!
	.attr('y', 6).attr('dy', '.71em').style('text-anchor', 'end').text('Frequency');

	let x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

	let y = d3.scale.linear().range([height, 0]);

	let xAxis = d3.svg.axis().scale(x).orient('bottom');

	let yAxis = d3.svg.axis().scale(y).orient('left');

	replay = data => {
	  let slices = [];
	  for (let i = 0; i < data.length; i++) {
	    slices.push(data.slice(0, i + 1));
	  }
	  slices.forEach((slice, index) => {
	    setTimeout(() => {
	      draw(slice);
	    }, index * 300);
	  });
	};

	draw = data => {
	  x.domain(data.map(d => {
	    return d.letter;
	  }));
	  y.domain([0, d3.max(data, d => {
	    return d.frequency;
	  })]);

	  let bars = svg.selectAll('.bar').data(data, d => {
	    return d.letter;
	  });

	  svg.select('.x.axis').transition().duration(300).call(xAxis);

	  svg.select('.y.axis').transition().duration(300).call(yAxis);

	  bars.exit().transition().duration(300).attr('y', y(0)).attr('height', height - y(0)).style('fill', 'red').remove();

	  bars.enter().append('rect').attr('class', 'bar').attr('y', y(0)).attr('height', height - y(0));

	  bars.transition().duration(300).attr('x', d => {
	    return x(d.letter);
	  }).attr('width', x.rangeBand()).attr('y', d => {
	    return y(d.frequency);
	  }).attr('height', d => {
	    return height - y(d.frequency);
	  });
	};

	replay(barchart);

/***/ }
/******/ ]);