/* eslint-disable */

$(function () {

    $("li.mainLi").mouseover(function () {

        $("ul.subMenu").stop().slideDown(800);
        /* 추가 기능 */

    });


    $("li.mainLi").mouseout(function () {

        $("ul.subMenu").stop().slideUp(800);

    });


  setInterval(fnSlide, 5000);

    function fnSlide() {

        $("#shuttleFrame").animate({
                "margin-left": "-1200px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(4)");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        );

    };

    $("button.tabBtn").click(function () {

        $("button.tabBtn").css({

            "border": "1px solid #aaa",
            "background-color": "#eee"

        });

        $(this).css({

            "border-bottom-color": "#fff",
            "background-color": "#fff",

        });


        $("div.tabContents").css({

            "display": "none"

        });

        // 탭버튼 클릭했을 경우 클릭한 버튼의 data-link 속성의 속성값을 가져와서 저장함

        var dataLink = $(this).attr("data-link")

        $("#" + dataLink).css({
            "display": "block"
        });

    });

    $("#btnArea button").click(function () {

        $("#layerBG").css({
            "display": "none"
        });

    });
    
    
    setTimeout(function(){
        
        $("#layerBG").css({
            "display":"block"
        })  
        
    }, 3000);



});
