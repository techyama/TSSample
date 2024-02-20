// Hello World
// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// import { primitiveSample } from "./basic";
// primitiveSample();

import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'
import { logMessage } from './function/basic'

logMessage('test')
isUserSignedIn('ABC')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
console.log(sumProductsPrice(100, 200, 300, 400, 500))
