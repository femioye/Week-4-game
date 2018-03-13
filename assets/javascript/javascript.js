"use strict";
$(document).ready(function(){
 
    let add = 0;
    let loss = 0;

    let winCount = function(){
        
        add++;
        return add ;
            
    };

    let lossCount = function(){
            
        loss ++;
        return loss;
            
    };

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    let randomlyPickedNumber;
    let crystalRandomNumber1;
    let crystalRandomNumber2;
    let crystalRandomNumber3;
    let crystalRandomNumber4;


    function game(){
        randomlyPickedNumber = Math.floor((Math.random() * 102) + 19);
        $("#randomPickedNumber").text(randomlyPickedNumber);
        crystalRandomNumber1 = Math.floor((Math.random() * 11) + 1);
        crystalRandomNumber2 = Math.floor((Math.random() * 11) + 1);
        crystalRandomNumber3 = Math.floor((Math.random() * 11) + 1);
        crystalRandomNumber4 = Math.floor((Math.random() * 11) + 1);
    }
    game();
    


    $("#btn1").on("click", function(){
        a +=  crystalRandomNumber;
        let z = a + b + c + d;
        
        console.log(z);
        $('#playerScore').text(z);
     
        if (  z === randomlyPickedNumber){
            
            $('#wins').text(winCount());
            
            $('#congrats').text("You win!");
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

        if ( z > randomlyPickedNumber){
           
            $('#losses').text(lossCount());
            $('#congrats').text("You Lose!")
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }
        
    
    });

    $("#btn2").on("click", function(){
        b +=  crystalRandomNumber2;
        let z = a + b + c + d;
       
        $('#playerScore').text(a + b + c + d);
      
        if (  z === randomlyPickedNumber){
            
            $('#wins').text(winCount());
            
            $('#congrats').text("You win!");
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

        if ( z > randomlyPickedNumber){
            
            $('#losses').text(lossCount());
            $('#congrats').text("You Lose!")
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

    });
    
    $("#btn3").on("click", function(){
        c +=  crystalRandomNumber3;
        let z = a + b + c + d;
        
        $('#playerScore').text(a + b + c + d);
       
        if (  z === randomlyPickedNumber){
            
            $('#wins').text(winCount());
            
            $('#congrats').text("You win!");
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

        if ( z > randomlyPickedNumber){
            
            $('#losses').text(lossCount());
            $('#congrats').text("You Lose!")
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

    });
    
    $("#btn4").on("click", function(){
       
        d +=  crystalRandomNumber4;
        let z = a + b + c + d;
        
        $('#playerScore').text(z = a + b + c + d);

        if (  z === randomlyPickedNumber){
         
            $('#wins').text(winCount());
          
            $('#congrats').text("You win!");
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

        if ( z > randomlyPickedNumber){
         
            $('#losses').text(lossCount());
            $('#congrats').text("You Lose!")
            $('#playerScore').text(0)
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            game();
            
        }

    });
    
 });