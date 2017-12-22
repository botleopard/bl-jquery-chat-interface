(function() {

    $('#live-chat header').on('click', function() {

        $('.chat').slideToggle(300, 'swing');
        $('.chat-message-counter').fadeToggle(300, 'swing');

    });

    $('.chat-close').on('click', function(e) {

        e.preventDefault();
        $('#live-chat').fadeOut(300);

    });

    $(document).keypress(function(e) {
        if(e.which === 13) {
            var text = $('#chat-input').val();
            $('#chat-input').val('');
            var date = new Date();
            var nowTime = date.getHours() + ':' + date.getMinutes();
            $('.chat-history').append('<div class="chat-message clearfix">\n' +
                '<img src="img/default-profile.png" alt="" width="32" height="32">' +
                '                <div class="chat-message-content clearfix">\n' +
                '                    <span class="chat-time">' + nowTime + '</span>\n' +
                '                    <h5>Me</h5>\n' +
                '                    <p>' + text + '</p>\n' +
                '                </div> <!-- end chat-message-content -->\n' +
                '            </div><hr>');
        }
    })

}) ();