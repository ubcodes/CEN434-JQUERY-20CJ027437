    // When the document is ready, attach a click event handler to the color-box element.
    $('.color-box').click(function() {
        // Generate a random color and change the background color of the box.
        var randomColor = getRandomColor();
        $(this).css('background-color', randomColor);
    });

    // Function to generate a random color in hexadecimal format.
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
