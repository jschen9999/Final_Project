var savevalue=10;
$(function(){

    $('#run').on("click",function(){
        for(var j=0;j<5;j++){
            var e11=document.getElementById(j);
            e11.style.color="black";
        }
        var i=0;
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        var e12 = document.getElementById(randomChildNumber);
        var handler = function(){ 
            if(i<20){   
                e12.style.color = "black";   
                randomChildNumber = Math.floor(Math.random()*numberOfListItem);      
                while(savevalue==randomChildNumber){
                    randomChildNumber = Math.floor(Math.random()*numberOfListItem);
                    e12.style.color = "black"; 
                }
                $("h1").text($("li").eq(randomChildNumber).text());
                $('img').attr('src',randomChildNumber+'.jpg');
                e12 = document.getElementById(randomChildNumber);
                e12.style.color = "red";
                i++;
            }
            
            else {
                clearInterval(timer);
                savevalue=randomChildNumber;                
            }
        }
        
        var timer = setInterval( handler , 20);
    });
    $('#reset').on("click",function(){
        $("h1").text('?');
        $('img').attr('src','5.jpg');
        for(var j=0;j<5;j++){
            var e11=document.getElementById(j);
            e11.style.color="black";
        }
    });
});

