(function() {
    var window = this,undefined, __$ = window._$

    //object initializarion
    _$ = window._$ = function(selector) {
        if (typeof selector === "string"){
            selector = document.querySelector(selector)
        }
        return new Pistol(selector)
    }


    //the custom javascript object
    Pistol = function(selector) {
        	this.element = selector


    // CONTAINS method
            this.contains = function(input){
                for (i in this.element) {
                        if (this.element[i] == input) return true
                }
                return false
            }

    // EACH method
            this.each = function(callback){
                for (var i=0; i<this.element.length; i++){ 
                        callback(this.element[i], i)
                }
            }


    // INJECT method
            this.inject = function(callback){
                var accumulator = 0
                for (var i=0; i<this.element.length; i++){ 
                        accumulator = callback(accumulator, this.element[i], i)
                }
                return accumulator
            }

    // LAST method
            this.last = function(){
                return this.element[this.element.length - 1]
            }

    // ON method
            this.on = function(event,callback){
                if (event == "click"){
                    this.element.onclick = callback
                }
            }

    // MAP method
            this.map = function(callback){
                var output = []
                for (var i=0; i<this.element.length; i++){ 
                        output.push(callback(this.element[i], i))
                }
                return output
            }


        }




})()