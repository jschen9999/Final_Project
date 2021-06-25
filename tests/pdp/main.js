$(function(){
    //儲存目前作答到第幾題
    var currentQuiz = null;
    var ans=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    //當按鈕按下後，要做的事情
    $("#startButton").on("click",function(){
        //如果還沒開始作答就從這裡開始
        if(currentQuiz==null){
            //設定目前作答從第0題開始
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //將選項區清空(可以試著先不寫)
            $("#options").empty();
            $("#out1").empty();
            $("#out2").empty();
            $("#out3").empty();
            $("#out4").empty();
            $("#out5").empty();
            //將選項逐個加入
            questions[0].answers.forEach(function(element,index,array){
            $("#options").append(`<input name='options' type='radio'
            value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //將按鈕上的文字換成Next
            $("#startButton").attr("value","Next");
        }
        else{
        
        //已經開始作答從這邊繼續
        //巡訪哪一個選項有被選取
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //是否已走到最後要產生結果(A~D)
                    if(currentQuiz==29){
                        //通往最終結果
                        ans[currentQuiz]=questions[currentQuiz].answers[i][1];
                        var tiger=ans[4]+ans[9]+ans[13]+ans[17]+ans[23]+ans[29];
                        var peacock=ans[2]+ans[5]+ans[12]+ans[19]+ans[21]+ans[28];
                        var koala=ans[1]+ans[7]+ans[14]+ans[16]+ans[24]+ans[27];
                        var owl=ans[0]+ans[6]+ans[10]+ans[15]+ans[20]+ans[25];
                        var chameleon=ans[3]+ans[8]+ans[11]+ans[18]+ans[22]+ans[26];
                        //顯示最終結果的標題
                        $("#question").text("結果:");
                        //將選項區域清空
                        $("#options").empty();
                        //顯示最終結果內容
                        $("#out1").empty();
                        $("#out1").text("老虎:").append(`${tiger}<br><br>`);
                        $("#out2").empty();
                        $("#out2").text("孔雀:").append(`${peacock}<br><br>`);
                        $("#out3").empty();
                        $("#out3").text("無尾熊:").append(`${koala}<br><br>`);
                        $("#out4").empty();
                        $("#out4").text("貓頭鷹:").append(`${owl}<br><br>`);
                        $("#out5").empty();
                        $("#out5").text("變色龍:").append(`${chameleon}<br><br>`);
                        
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                    else{
                        //指定下一題，原始資料從1開始，所以要-1
                        ans[currentQuiz]=questions[currentQuiz].answers[i][1];
                        currentQuiz = currentQuiz+1;
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false; //跳離迴圈的方式
                }
                    
            });
        }
    });
});
