$(document).ready(function(){
		    $("button").click(function(){
		        $.get("http://bootcamp.aws.af.cm/welcome/"+ $(".alias").val(), function(data, status){
		            if (status == "success") {
		            		console.log("respuesta del servidor: " + data.response);
		            	var subString = data.response.substr(8);
							console.log("data.response.substr: " + data.response.substr(8,-1));
							console.log("substr: " + subString );
						var sliced = data.response.slice(0,8);
							console.log(subString, sliced);
						$(".hiddenSection").html(sliced + "<strong>" + subString + "</strong>" + "!");
		            }
		            else{
		            	$(".hiddenSection").addClass("error");
		            	$(".hiddenSection").html("An error has ocurred!!"+ "<br>"+"Status: "+ status + "<br>"+ "Server answer: " + data.response);
		            };
		        });
		    });
		});
/*Take some free air and then create a function to highlight your name in the server response content. Call it right after setting the response inside the div.
 
 
	var subString = data.response.substr(8,-1);
	var sliced = data.response.slice (8,-1);
 	$(".hiddenSection").html(sliced + "<strong>" + subString + "</strong>" + "!");

 	<span class="highlightme">test</span>

 	in 
 	*/
