$(function() {
$(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log("button hit");

    var newBurger = {
        burger_name: $("#createBurger").val().trim()
    };

    // Send the POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    )

    // $(".devour").on("click", function(event) {
    //     event.preventDefault();

    //     var id = $(this).data("id");
    //     var devouredState = {
    //         devoured
    //     }
    // })
})
})