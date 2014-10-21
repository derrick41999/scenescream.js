/*
The MIT License (MIT)
    Changed  
Copyright (c) 2014 Derrick Douglass
 
Permissions is hereby granted, free of charge, to any person obtaining a copy
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

	     // Loop through every element that has a SCENES class to get the Top and Height positions of our SCENES in relation to the viewport 
    $('.scenes').each(function(){
		
		var id = $(this).attr("id");
		
			// Get the top, right, Height, and left offset coordinates of our SCENES and assign them to the variable OBJ 
		var obj = document.getElementById(id).getBoundingClientRect();
		
			// Place the Top postions of our SCENES into the SCENES array 
       scenes[this.id + "Top"] = obj.top;  
	   
	   		// Place the Height postions of our SCENES into the SCENES array 
	   scenes[this.id + "Height"] = 0 - obj.height; //Change .height to .innerHeight, .outerHeight, outerHeight(true); 
	   
	});
				// If the Top of a SCENE is above the viewport and the Height of a SCENE is below the viewport, we'll do something						 
            if ( scenes["scene1Top"] <= 0 && scenes["scene1Top"] >= scenes["scene1Height"] ) {
				
				//Add your code here to do something when scene1 is in view

			} 
			if ( scenes["scene2Top"] <= 0 && scenes["scene2Top"] >= scenes["scene2Height"] ) {
				
				//Add your code here to do something when scene2 is in view

			}
			if ( scenes["scene3Top"] <= 0 && scenes["scene3Top"] >= scenes["scene3Height"] ) {
				
				//Add your code here to do something when scene3 is in view

			}
			if ( scenes["scene4Top"] <= 0 && scenes["scene4Top"] >= scenes["scene4Height"] ) {
				
				//Add your code here to do something when scene4 is in view

			}
			if ( scenes["scene5Top"] <= 0 && scenes["scene5Top"] >= scenes["scene5Height"] ) {
				
				//Add your code here to do something when scene5 is in view

			}
			
			//You can copy and add as many additional scene subroutines you need for your project
    });
});
