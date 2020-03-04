/******************
 * YOUR CODE HERE *
 ******************/
const call = function(func){
  func()
}

const callTwice = function(func){
  func()
  func()
}

const callXTimes = function(func, num){
  for (let i=0; i<num; i++){
    func()
  }
}

const returnFromFunc = function(func){
  return func()
}

const modifyString = function(str, func){
  return func(str)
}

const modifyNumber = function(num, func){
  return func(num)
}

const modifyAnything = function(x, func){
  return func(x)
}

const twoFuncs = function(func1, func2){
  const x = func1()
  return func2(x)
}

const threeFuncs = function(func1,func2,func3){
  const x = twoFuncs(func1,func2)
  return func3(x)
}

const twoValues = function(val1,val2,func){
  return func(val1,val2)
}

const twoValuesRTL = function(val1,val2,func){
  return func(val2,val1)
}

/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  threeFuncs,
  twoValues,
  twoValuesRTL,
}
