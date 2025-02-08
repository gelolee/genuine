window.onload = function () {
    // Remove "not-loaded" class after 1 second
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);

    // Ensure jQuery runs after the page loads
    $(document).ready(function () {
        $("#yesButton").click(function () {
            $("#content").html(`
                <h2>Yey! Knew you would say yes! I Love You Baby!<3 Let's go Yoshimeatsu!!!</h2>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJ1NnRpaDNwbHk3bDd4MXBneXFoYXFkdmJ0N2k1cDRhaDV5N2FuOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fxsqOYnIMEefC/giphy.gif" 
                    alt="Excited GIF" width="300">
            `);
        });
    });
};
