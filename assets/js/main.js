$(document).ready(function() {
	console.log("jQuery is awesome");

	$(".up-button").click(function(){

		$.scrollTo(0, 500);
		//$.scrollTo scrolls the whole widnow but you can specify certain elements

	});

	$(".down-button").click(function(){

		$.scrollTo('+=200px', 500);
		//$.scrollTo scrolls the whole widnow but you can specify certain elements

	});

	$("#scene").parallax();
	$("#scene2").parallax();

	new Waypoint({
		element: $(".car"),
		handler: function(direction){
			$(".car").addClass("animate");
			$(".speech1").addClass("animate");
		},
		offset: '50%'
	});
    
    new Waypoint({
		element: $(".cheers"),
		handler: function(direction){
			$(".img2").addClass("animate");
		},
		offset: '50%'
	});
    
    new Waypoint({
		element: $(".lightsOut"),
		handler: function(direction){
			$(".lightsOut").addClass("animate");
		},
		offset: '70%'
	});
    
    new Waypoint({
		element: $(".scream"),
		handler: function(direction){
			$(".scream img").addClass("animate");
		},
		offset: '20%'
	});
    
     new Waypoint({
		element: $(".scream"),
		handler: function(direction){
			$(".choices").addClass("animate");
		},
		offset: '20%'
	});
    
    new Waypoint({
		element: $(".toast"),
		handler: function(direction){
			$(".choices").addClass("animate");
		},
		offset: '50%'
	});
    
    new Waypoint({
		element: $(".basementScary"),
		handler: function(direction){
			$(".bg-image").addClass("animate");
            $(".shadow").addClass("animate");
		},
		offset: '50%'
	});
    
    
	
    $('.cheers1').click(function() {
        console.log("hello");
        $(".lightsOut").removeClass("hidden");
        $(".cheers").addClass("display");
        $(".scream").addClass("display");
    });

    $('.cheers2').click(function() {
        console.log("hello");
        $(".goUnpack").removeClass("hidden");
        $(".bedUnpack").removeClass("hidden");
        $(".painting").removeClass("hidden");
        $(".lightsOut").removeClass("hidden");
    });
    
    $('.scream1').click(function() {
        console.log("hello");
        $(".basement").removeClass("hidden");
        $(".breaker").addClass("display");
        $(".breaker").removeClass("hidden");
    });
    
    
    $(".breaker .textContainer").addClass("hidden");
    
    $('.rightSwitch').click(function() {
        console.log("hello");
        $(".lightOn").addClass("animate");
        $(".lightOn").addClass("animate2");
        $(".breaker .textContainer").removeClass("hidden");
        $(".basementScary").addClass("display");
        $(".basementScary").removeClass("hidden");
        $(".goodJob").removeClass("hidden");
        $(".bedtime").removeClass("hidden");
        $(".sleeping").removeClass("hidden");
        $(".death").removeClass("hidden");
    });
    
    
    

});