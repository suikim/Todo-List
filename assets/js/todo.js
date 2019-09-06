//Function to fade out task
//$("ul").on("click", "li", function() -- adds event to every li within ul
//$("li").on("click", function() -- same as $("li").click()

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Delete function
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add task function
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//if val not empty
		if($(this).val() != ""){
			//add li to ul
			$("ul").append('<li><span class="delete"><i class="fa fa-trash"></i> </span>'+ $(this).val()+ '</li>')
			//empty val after adding task
			$(this).val("");
		}
		
	} 	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(200);
});
