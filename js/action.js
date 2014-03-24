$(document).ready(function() {

    (function() {
        $("#connect").click(function() {
            $("#connect_netflix").html("<img src=\"images/thinking2.gif\" alt=\"thinking\" loop=infinite height=\"40px\" width=\"40px\"/>");
            setTimeout(function(){
                $("#step").html("<p>Your Netflix account is now connected!</p>");
                $("#step").css("padding", "10px 0 10px 0");
                $("#login").toggle();
                $("#socialmedia").toggle();

                
            },5000);
        });
    })();
    
    function scrollToAnchor(aid){
        var aTag = $(aid);
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    };

    (function () {
        var count = 1;
        //setup account
        $('#go').click(function() {
            //$('#'+count).css("display", "none");
            count += 1;
            $('#'+count).css("display", "block");
            //console.log(count);
            scrollToAnchor('#'+count);

            if(count === 3){
                $('#go').css("display", "none");
                $('#go3').css("display", "block");
            }
        }); 
    })();
 
    (function() {
        $('.befriend').click(function() {
            this.innerHTML = "Request Sent!";
            var friend = $(this).parent().find(".name").find("p").clone().children().remove().end().text().toLowerCase();
            sessionStorage.setItem(friend, friend);
            //console.log(friend+" has been stored!");
        });
    })();

    (function() {
        $.each(sessionStorage, function(key, value){
            var name = value.split(" ");
            var fullname = value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            //console.log(fullname);
            var buddy = "<tr class=\"person\"><td class=\"pic\"><img id=\""+name[0]+"\" src=\"images/"+name[0]+".jpg\" alt=\""+name[0]+"\" /></td><td class=\"name\"><p>"+fullname+"</p></td></tr>";
            //console.log(buddy);
            $("#group").append(buddy);
        });
    })();


    (function() {
        $("#switch").click(function(){
            scrollToAnchor('#create');
            $("#group").toggle();
            $("#morefriends").toggle();
            $("#more").toggle();
            $("#less").toggle();
        });
    })();

    (function() {
        $('#create .person').click(function() {
            var pic = $(this).find(".pic").html();
            var fullname = $(this).find(".name p").html();
            var id = fullname.replace(/\s+/g, '');

            //console.log(pic+": "+id);
            if($("#couch #"+id).length){
                //console.log("match!");
                $("#"+id).remove();
                $(this).css("background-color", "gray");
            } else {
                //console.log("no match!");
                var insert = "<div class=\"friend\" id=\""+id+"\">"+pic+"<p>"+fullname+"</p></div>";
                $("#couch").append(insert);

                $(this).css("background-color", "#29292d");
                $(this).css("color", "white");
            }

            var children = $("#couch div").length;
            var height = $(".friend").height()+10;
            console.log(children);
            if (children <= 4){
                var width = 100/children;
                //console.log(height);
            } else {
                var width =25;
                var height = Math.ceil(children/4)*height;
                console.log(height);
            }
            $("#couch").css("height", height+"px")
            $(".friend").css("width", width+"%");
            $(".friend img").css("max-width", "90%");

            if($("#couch").children().length > 0){
                $("#getresults").text("Find us suggestions!");
            } else {
                $("#getresults").text("I'm riding solo...");
            }
        });
    })();

    (function() {
            $("#onetime").click(function(){
            $(this).css("background-color", "#29292d");
            $(this).css("color", "white");
            $("#xtime").css("background-color", "white");
            $("#xtime").css("color", "black");
            $("#onewatch").toggle();
            $("#xwatch").toggle();
        });
        $("#xtime").click(function(){
            $("#onetime").css("background-color", "white");
            $("#onetime").css("color", "black");
            $(this).css("background-color", "#29292d");
            $(this).css("color", "white");
            $("#onewatch").toggle();
            $("#xwatch").toggle();
        });
    })();

});



