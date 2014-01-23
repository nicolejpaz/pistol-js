pistol-js
=========

Pistol is a small but fast JavaScript library; it is similar to jQuery but tries to use as little code as possible.

This is a project I started for my own benefit because I used jQuery for a recent project but I realized that I only used a few of its functions.  Most of those functions I used could be written using very few lines of plain JavaScript code.  Why not make a really small replacement to fulfill my needs while saving the overhead?

goal
=========

While this project is certainly useful to me, I see Pistol as having more educational value than anything else.  It may be especially helpful to beginner programmers who want to write their own JavaScript library or understand how many existing JS libraries work.

how it's fast
=========

My ideas for reducing overhead are as follows:

- No complex selection engines.  The current version of Pistol only uses querySelector if the user passes in a string of CSS selectors.  Otherwise, a user can still select elements with plain JavaScript or use a CSS selector engine like Sizzle.

- Using as little logic as possible.  Currently this is exhibited by the fact that the user must always specify extra arguments such as index(when using iterators such as "each") even when they aren't needed.  This reduces the amount of underlying code in exchange for a minor inconvenience for the developer.

how to use
=========

I am not providing any documentation yet, but you can take a peek at the js file and see what functions you can use.

Pistol has functions such as each, inject, map, contains, on, etc.

To select an element:

```
_$('#something')
```


In return you get a Pistol object:

```
Pistol {element: div#something, contains: function, each: function, inject: function, last: function...}
```


Here is an example of using the each function:

```
_$('.box').each(function(element,index){
	console.log(element)
})
```

