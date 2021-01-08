$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#createBurger").val().trim()
    };

    // Send the POST request
    $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    )
})