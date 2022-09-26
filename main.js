/** @format */
import {
	printALlNosBtnZeron,
	exampleQuadratic,
	exampleCubic,
	exampleLogarithimic
} from './bigo.js';

// printALlNosBtnZeron( 100 );

console.time('execution');
// exampleQuadratic(100);
// exampleCubic(100);
exampleLogarithimic(1000);
console.timeEnd('execution');
