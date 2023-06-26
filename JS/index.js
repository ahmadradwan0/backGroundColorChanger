$(document).ready(function () {
    var colorRangeInput = $("#color-range");
    var body = $("body");
    var backgroundColor = "background-color";
    
    
    $(colorRangeInput).on('input',function(){
        body.css(backgroundColor,colorRangeInput.val());
        $("#colorText").css("color",reverseColor(colorRangeInput.val()))
        
    });


    function reverseColor(color) {
        // Remove the leading #
        color = color.slice(1);
        
        // Convert to RGB
        var red = parseInt(color.slice(0, 2), 16);
        var green = parseInt(color.slice(2, 4), 16);
        var blue = parseInt(color.slice(4, 6), 16);
        
        // Reverse the RGB values
        red = 255 - red;
        green = 255 - green;
        blue = 255 - blue;
        
        // Convert back to hexadecimal color code
        var reversedColor = '#' + (red.toString(16)).padStart(2, '0') +
                            (green.toString(16)).padStart(2, '0') +
                            (blue.toString(16)).padStart(2, '0');
        
        return reversedColor;
      }
    
});