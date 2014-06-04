var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = {};
  queue.length = 0;
  queue.storage = {};

  for (var method in queueMethods) {
    queue[method] = queueMethods[method];
  }

  return queue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function () {
  var result = this.storage[0];
  if (this.length > 0) {
    for (var i = 1; i < this.length; i++) {
      this.storage[i-1] = this.storage[i];
    }
    this.length--;
    delete this.storage[this.length];
  }

  return result;
 };



// var giraffeMaker = function(name, height){
//   var newGiraffe = {}
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);
//   return newGiraffe;
// };

// var extend = function(to, from){
//   for (var key in from){
//     to[key] = from[key];
//   }
// };

// giraffeMaker.giraffeMethods = {}

// giraffeMaker.giraffeMethods.greet = function(){
//   console.log('Hello, my name is ' + this.name + ', it is nice to meet you.');
// };

// giraffeMaker.giraffeMethods.eat = function(){
//   if(this.height > 2){
//     if(this.hunger > 0){
//       this.hunger -= this.height;
//     } else {
//       console.log(this.name + " is not hungry.")
//     }
//   } else {
//     console.log(this.name + " too short to reach these trees.")
//   }
// };

// giraffeMaker.giraffeMethods.hunger = 10;
