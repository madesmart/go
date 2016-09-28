$('.clickme').click(function(){
    $(location).attr('href', 'mailto:buzzio@gmail.com?subject=starter'
                             + encodeURIComponent("This is my subject")
                             + "&body="
                             + encodeURIComponent("This is my body")
    );
});
