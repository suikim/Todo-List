//Function to fade out task
$("li").on("click", function(){
	$(this).toggleClass("done");
});

//Delete function
$("span").on("click", function(){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


// $("#addTask").click(function(){
// 	$("ul").add("li", "hello");
// });
