/*
The MIT License (MIT)

Copyright (c) 2014 Derrick Douglass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

$(document).ready(function(){

   var scenes = {}

    $(document).scroll(function(){

	     // Loop through every element that has a SCENES class to get the Top and Bottom positions of our SCENES in relation to the viewport 
    $('.scenes').each(function(){
		
		var id = $(this).attr("id");
		
			// Get the top, right, bottom, and left offset coordinates of our SCENES and assign them to the variable OBJ 
		var obj = document.getElementById(id).getBoundingClientRect();
		
			// Place the Top postions of our SCENES into the SCENES array 
       scenes[this.id + "Top"] = obj.top;  
	   
	   		// Place the Bottom postions of our SCENES into the SCENES array 
	   scenes[this.id + "Bottom"] = 0 - obj.height; //Change .height to .innerHeight, .outerHeight, outerHeight(true); 
	   
	});
				// If the Top of a SCENE is above the viewport and the Bottom of a SCENE is below the viewport, we'll do something						 
            if ( scenes["scene1Top"] <= 0 && scenes["scene1Top"] >= scenes["scene1Bottom"] ) {
			$(".sceneIndicatorBox")
			.text("scene 1")
			.css("background-color","#F90")
			.css("box-shadow","4px 4px 7px #fff");
							} 
			if ( scenes["scene2Top"] <= 0 && scenes["scene2Top"] >= scenes["scene2Bottom"] ) {
			$(".sceneIndicatorBox")
			.text("scene 2")
			.css("background-color","#fff")
			.css("box-shadow","4px 4px 7px #0f3");
			}
			if ( scenes["scene3Top"] <= 0 && scenes["scene3Top"] >= scenes["scene3Bottom"] ) {
			$(".sceneIndicatorBox")
			.text("scene 3")
			.css("background-color","#0f3")
			.css("box-shadow","4px 4px 7px #069");
			}
			if ( scenes["scene4Top"] <= 0 && scenes["scene4Top"] >= scenes["scene4Bottom"] ) {
			$(".sceneIndicatorBox")
			.text("scene 4")
			.css("background-color","#069")
			.css("box-shadow","4px 4px 7px #f6c");
			}
			if ( scenes["scene5Top"] <= 0 && scenes["scene5Top"] >= scenes["scene5Bottom"] ) {
			$(".sceneIndicatorBox")
			.text("scene 5")
			.css("background-color","#f6c")
			.css("box-shadow","4px 4px 7px #9cc");
			}
    });
});
