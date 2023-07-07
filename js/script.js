$(function(){

    $("#section").fullpage({

        navigation:true,  /* 점점 생김 */
        navigationPosition:"right",  /* 왼쪽으로 이동 */
        keyboardScrolling:true, /* 스페이스 방향키로 이동가능 */
        ScrollingSpeed:3000

    })//fullpage

    $(".l_menu li").click(function(){
      $(this).find("span").toggleClass("on");
      $(".hide_menu").toggleClass("on");
  
  
  })

    /*  */
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
    
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,100); // 반복동작 
    } 
         
    function typing(){ 
      $(".typing ul li").removeClass("on");
       $(".typing ul li").eq(liIndex).addClass("on");
      if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ if(liIndex<liLength-1){
         //다음문장으로  가기위해 인덱스를 1증가
           liIndex++; 
         //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
           
         //다음문장 타이핑전 1초 쉰다
             clearInterval(tyInt);
              //타이핑종료
         
             setTimeout(function(){
               //1초후에 다시 타이핑 반복 시작
               tyInt = setInterval(typing,100);
             },1000);
            } else if(liIndex==liLength-1){
              
             //마지막 문장까지 써지면 반복종료
               clearInterval(tyInt);
            }
        } 
    }  


    /* contents2 */
    // var time = setInterval(leftmove,2000)

    //         function leftmove(){

    //             $(".view").animate({left:"-=450px"},1900
    //             , function(){
    //                 // $(".view").append($(".view li:nth-child(1)") )
    //                 // $(".view").append($(".view li").eq(0) )
    //                 $(".view").append($(".view li").first() )
    //                 $(".view").css({left:"+=450px"})
    //             })//animate
                
    //           }//leftmove
    //           // 버튼에 호버됐을때 멈추고, 실행
    //           $(".view").hover(function(){
    //               clearInterval(time)
    //           }, function(){
    //               time = setInterval(leftmove,1000)
    //           })
    $(".view").slick({
      autoplay:true,
      autoplaySpeed:2500,
      arrows:false,
      
  })
    $(".view2").slick({
      autoplay:true,
      autoplaySpeed:2500,
      arrows:false,
      
  })
    $(".view3").slick({
      autoplay:true,
      autoplaySpeed:2500,
      arrows:false,
      
  })

            /* contents3 */



            
            



})//jq close