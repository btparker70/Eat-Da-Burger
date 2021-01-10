$(function () {
    $(".create-form").on("submit", function (event) {
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
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    })
    $(".devour").on("click", function (event) {
        console.log("test")
        event.preventDefault();

        var id = $(this).data("id");
        var newDevour = $(this).data("devoured");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("has been devoured");
            location.reload();
        }
        )
    })
})