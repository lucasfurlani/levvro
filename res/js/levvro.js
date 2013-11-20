$( document ).ready(function() {
    $("#edition").select2({
    	placeholder: "Select a Faculty",
    });

    $("#condition").select2({
    	placeholder: "Select a Faculty",
    });

    $("#select-faculty").select2({
    	placeholder: "Select a Faculty",
    });
});

$('.listing-collapse').click(function(){
	$(this).nextUntil('tr.listing-collapse').slideToggle(0);
	$(this).toggleClass("warning");
});