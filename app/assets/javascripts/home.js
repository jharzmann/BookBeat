
$(document).ready(function(){
        $(".button").click(function() {
        var query = $("#query").val();
            $.getJSON('https://api.readmill.com/v2/books/search.json?query='+query+'&client_id=3c3e949307f81c6445f04491b5843609&callback=?', function(data) {
                $.each(data.items, function(i, element){
                    var link = $("<a href=\"#" + "\">"+ " " +element.book.author+" " +element.book.title+" " +element.book.story+"</a>");
                    $('.wrap').append(link).append("<br />"+"<br />");
                    link.click(function(){
                        console.log(element.book.id);
                        $(location).attr('href', '/catalogs/' + element.book.id);
                    });
                });


            });
        });
    })

