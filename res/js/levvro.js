$(document).ready(function () {
    $("#edition").select2({
        placeholder: "Select a Faculty",
    });

    $("#condition").select2({
        placeholder: "Select a Faculty",
    });

    $("#select-faculty").select2({
        placeholder: "Select a Faculty",
    });

    $('.courses-typehead').typeahead({
        name: 'coursenames',
        local: ["BUS101 Introduction to Business","CSC151 Introduction to Programming","BUS251 Introduction to Management Science","POT101 Introduction to Potatoes","EC101 Introduction to Microeconomics"],
        autoselect: 'first',
    });
});

$('.listing-collapse').click(function () {
    $(this).nextUntil('tr.listing-collapse').slideToggle(0);
    $(this).toggleClass("warning");
});