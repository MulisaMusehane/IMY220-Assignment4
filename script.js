$(document).ready(function () {

    //MULISA MUSEHANE 21450162
    var inputString = $("textarea#message").val();
    var input = inputString;

    jQuery('#left').on('click', function () {

        var inputString = $("textarea#message").val();
        var input = inputString;

        if (input != "") {

            var ytregex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|watch\?v=|watch\?feature=player_embedded&v=|embed%2Fvideoseries%2F|embed\?feature=player_embedded&v=)([^#\&\?\s]*).*/g;
            var match;

            if ((match = ytregex.exec(input)) !== null) {
                var ytlink = "https://www.youtube.com/embed/" + id;
                var id = match[1];
                var startingbegin = input.substring(0, match.index);
                var iframe = $("<iframe>").attr({
                    src: ytlink,
                    frameborder: 0, 
                    allowfullscreen: true 
                }).css({
                    width: "100%",
                    height: "315px"
                });

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#CBC3E3", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            }).append(
                                jQuery('<p></p>', {
                                    html: startingbegin,
                                }),
                                jQuery('<div></div>', {
                                    html: ytlink,
                                }),
                                iframe
                            )
                        )
                )
            }
            else {

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                html: input,
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#CBC3E3", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            })
                        )
                )
            }
        }

        $('textarea#message').val('');
    });

    jQuery('#right').on('click', function () {

        var inputString = $("textarea#message").val();
        var input = inputString;

        if (input != "") {
            var ytregex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|watch\?v=|watch\?feature=player_embedded&v=|embed%2Fvideoseries%2F|embed\?feature=player_embedded&v=)([^#\&\?\s]*).*/g;
            var match;

            if ((match = ytregex.exec(input)) !== null) {

                var ytlink = "https://www.youtube.com/embed/" + id;
                var id = match[1];
                var startingbegin = input.substring(0, match.index);
                var iframe = $("<iframe>").attr({
                    src: ytlink,
                    frameborder: 0, 
                    allowfullscreen: true 
                }).css({
                    width: "100%", 
                    height: "315px"
                });

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#EAFFF1", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            }).append(
                                jQuery('<p></p>', {
                                    html: startingbegin,
                                }),
                                jQuery('<div></div>', {
                                    html: ytlink,
                                }),
                                iframe
                            )
                        )
                )
            }
            else {

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                html: input,
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#EAFFF1", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            })
                        )
                )
            }
        }

        $('textarea#message').val('');
    });
});





