<script>

jQuery(document).ready(function($) {
    // Hide the popup button initially using CSS
    $('.elementor-2801 .elementor-element.elementor-element-92f479f .elementor-button').css('visibility', 'hidden');

    // On click event for the download button
    $('.elementor-2801 .elementor-element.elementor-element-3b882b9 .elementor-button').on('click', function() {
        // Simulate download process (you can add actual download functionality here if needed)

        // After a 1.5 second delay, trigger the hidden popup button click
        setTimeout(function() {
            $('.elementor-2801 .elementor-element.elementor-element-92f479f .elementor-button').trigger('click');
        }, 1500); // Delay of 1.5 seconds (adjustable)
    });
});

</script>
