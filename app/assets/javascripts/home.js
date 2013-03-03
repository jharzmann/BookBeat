
$(document).ready(function(){
        $(".button").click(function() {
        var query = $("#query").val();
            $.getJSON('https://api.readmill.com/v2/books/search.json?query='+query+'&client_id=3c3e949307f81c6445f04491b5843609&callback=?', function(data) {
                $.each(data.items, function(i, element){
<<<<<<< HEAD
                    var link = $("<a href=\"#" + "\">"+ "<br />" +element.book.author+ "<br />" +element.book.title+"</a>");
                    $('.wrap').append(link).append("<br />"+"<br />");
                    var image = "<div id='image'><img src=" + element.book.cover_url + " alt='book cover'></div>";
                        $('.wrap').append(image);

=======
                    var image = "<div class='image'><img src=" + element.book.cover_url + " alt='book cover'></div>";
                        //$('.wrap').append(image);    
                    var link = $("<a href=\"#" + "\">"+ image +"<p>" +element.book.author+ "</p>"+"<p>"+element.book.title+"</p>"+"</a>");
                        $('.wrap').append(link).append("<br />"+"<br />");
                    
>>>>>>> 639bc47bba3adac72587c469282cf8ec8394fd4e
                    // get book.id for each link.click
                    link.click(function(){
                        //console.log(element.book.id);
                        $(location).attr('href', '/catalogs/' + element.book.id);
                    });
                });


            });
        });
<<<<<<< HEAD

=======
>>>>>>> 639bc47bba3adac72587c469282cf8ec8394fd4e
        // Submit pushing enter key
        $('#query').keypress(function(event){
                if(event.keyCode == 13){
                        $('.button').click();
                }
        })
        // clean up result list
        $('.button').click(function(e){
                $(".wrap").empty();
                
        });
    })

