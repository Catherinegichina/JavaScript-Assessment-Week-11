// Question3.
// A carousel is a component for cycling through slide shows eg a slideshow.
// It works through attributes.Eg The attribute activats the carousel,the data slide
// attribute which slide to go.It accepts two values:previous or next slide.

// Question 4.
var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();
// This output will print Lovelace as the first and second output.The third output will print
// undefined while the last output prints Lovelace.
// This is is because the variable name is only accessible in the local scope.Therefore,it can 
// accessed by the first function which is in its lexical environment.The second variable is 
// outside the lexical environment.
