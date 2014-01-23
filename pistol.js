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
        	this.selection = selector

    // ADDCLASS method
            this.addClass = function(input){
                this.selection.className = this.selection.className + " " + input
            }


    // CONTAINS method
            this.contains = function(input){
                for (i in this.selection) {
                        if (this.selection[i] == input) return true
                }
                return false
            }

    // EACH method
            this.each = function(callback){
                for (var i=0; i<this.selection.length; i++){ 
                        callback(this.selection[i], i)
                }
            }


    // INJECT method
            this.inject = function(callback){
                var accumulator = 0
                for (var i=0; i<this.selection.length; i++){ 
                        accumulator = callback(accumulator, this.selection[i], i)
                }
                return accumulator
            }

    // LAST method
            this.last = function(){
                return this.selection[this.selection.length - 1]
            }

    // ON method
            this.on = function(event,callback){
                if (event == "click"){
                    this.selection.onclick = callback
                }
            }

    // MAP method
            this.map = function(callback){
                var output = []
                for (var i=0; i<this.selection.length; i++){ 
                        output.push(callback(this.selection[i], i))
                }
                return output
            }

    // REMOVECLASS method
            this.removeClass = function(input){
                if (input){
                    var old = this.selection.className.split(' ')
                    var remove = input.split(' ')
                    var seen = [], diff = []
                    for ( var i = 0; i < remove.length; i++)
                        seen[remove[i]] = true
                    for ( var i = 0; i < old.length; i++)
                        if (!seen[old[i]])
                            diff.push(old[i])
                    this.selection.className = diff.join(' ')
                } else {
                    this.selection.className = ""
                }
            }


        }




})()