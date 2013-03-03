
$(document).ready(function(){
        $(".button").click(function() {
        var query = $("#query").val();
            $.getJSON('https://api.readmill.com/v2/books/search.json?query='+query+'&client_id=3c3e949307f81c6445f04491b5843609&callback=?', function(data) {
                $.each(data.items, function(i, element){
                    var image = "<div class='image'><img src=" + element.book.cover_url + " alt='book cover'></div>";
                        //$('.wrap').append(image);    
                    var link = $("<a href=\"#" + "\">"+ image +"<p>" +element.book.author+ "</p>"+"<p>"+element.book.title+"</p>"+"</a>");
                        $('.wrap').append(link).append("<br />"+"<br />");
                    
                    // get book.id for each link.click
                    link.click(function(){
                        //console.log(element.book.id);
                        $(location).attr('href', '/catalogs/' + element.book.id);
                    });
                });


            });
        });
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

