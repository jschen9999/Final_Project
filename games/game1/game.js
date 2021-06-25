$(function() {
    //1
     var cells = $('.cell');
      //圈叉符號
        var symbols = ['&times;', '&#9675;'];
      //目前為第幾輪
        var currentStep = 0,
            currentState = {};
        var gameOver = true;
        //調整大小
     var winResizeHandler = function() {
            var c = cells;
            var w = c.width();
            c.css({
                'line-height': w * 0.92 + 'px',
                'font-size': w + 'px'
            }).height(w);
        };
        winResizeHandler();
        //4
          //哪些情況可能獲勝
        var winningCombos = {
            combo0: [0, 1, 2],
            combo1: [3, 4, 5],
            combo2: [6, 7, 8],
            combo3: [0, 3, 6],
            combo4: [1, 4, 7],
            combo5: [2, 5, 8],
            combo6: [0, 4, 8],
            combo7: [2, 4, 6]
        };
      ///點了哪個方格後所需要檢查的組合
        var potentialCombos = {
            0: ['combo0', 'combo3', 'combo6'],
            1: ['combo0', 'combo4'],
            2: ['combo0', 'combo5', 'combo7'],
            3: ['combo1', 'combo3'],
            4: ['combo1', 'combo4', 'combo6', 'combo7'],
            5: ['combo1', 'combo5'],
            6: ['combo2', 'combo3', 'combo7'],
            7: ['combo2', 'combo4'],
            8: ['combo2', 'combo5', 'combo6'],
        };
    /////圈叉的圖案轉換，先叉後圈
        var showArrow = function(p) {
            if (p % 2 === 0) {
                $('.player1 > .arrow').removeClass('inv');
                $('.player2 > .arrow').addClass('inv');        
            } else {
                $('.player1 > .arrow').addClass('inv');
                $('.player2 > .arrow').removeClass('inv');            
            }
        };
    
    
    
    
        //3
           var checkCombo = function(a) {
            var a0 = currentState[a[0]],///檢查陣列中三個元素是否都等於圈或叉
                a1 = currentState[a[1]],
                a2 = currentState[a[2]];
            var w = (a0 === a1 && a1 === a2);
            if (w) {//加上win class讓該條顏色變紅色
                $('.cell[data-i="' + a[0] + '"]').addClass('win');
                $('.cell[data-i="' + a[1] + '"]').addClass('win');
                $('.cell[data-i="' + a[2] + '"]').addClass('win');
            }
            return w;
        };
    
    
    
    
    
    //2
        //接著定義點擊cell要發生的事
           cells.click(function(e) {
            if (!gameOver) {
                var $this = $(this);//簡寫
                var i = $this.data('i');//cell中自定義的屬性data-i
                if (currentState[i] === null) {
                    var s = symbols[currentStep++ % 2];//symbols[0]為叉symbols[1]為圈
                    currentState[i] = s;
                    $this.html(s);
                    for (var j = 0, len = potentialCombos[i].length; j < len; j++) {
                        if (checkCombo(winningCombos[potentialCombos[i][j]])) {
                            console.log(s + 'won');
                            gameOver = true;
                            $('.ss').text('按任意鍵重新開始');
                            return;
                        }
                    }
                    if (currentStep === 9) {
                        gameOver = true;
                        $('.ss').text('平手! 按任意鍵重新開始');
                        return;
                    }
                    showArrow(currentStep);
                }
            }
        });
    
        //回到上面定義potentialCombos winningCombos  checkCombo  showArrow
    
        //5
        //最後定義遊戲要在剛開始時初始化，和gameover時點擊任意按鍵初始化
        ///初始化遊戲
        var initGame = function() {
          ///如果遊戲結束清空九公格
            if (gameOver) {
              //清空圈叉圖案
                cells.empty();
                for (var i = 0; i < 9; i ++) {
                    currentState[i] = null;
                }
              //還原步數
                currentStep = 0;
              //還原圖案為叉
                showArrow(currentStep);
                gameOver = false;
                cells.removeClass('win');
                $('.ss').text('');
            }
        };
      //載入完網頁先執行初始化
        initGame();
    
            $(window)
            .resize(winResizeHandler)//縮放螢幕後自動調整方塊大小
            .keydown(function(e) {//點擊任意鍵初始化
                e.preventDefault();
                initGame();
            });
    
    });