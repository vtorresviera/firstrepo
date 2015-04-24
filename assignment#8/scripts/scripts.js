$(document).ready(function(){    
    //Array - Display Names

    function DisplayAll(){
            var namesAll = ["Vanessa","Lenny","Orlando","Orly"];
        
            $("#button1").click(function(){
                for(i = 0; i < namesAll.length; i++){
                console.log(namesAll[i]);
            }
        });
    }
    //Loop 10 Button
    function LoopTen(){
            $("#button2").click(function(){
                  for (var i = 1; i < 11; i++) {
                    console.log(i);
                }
            });
    }
    //Hover over any button on page will turn purple TAG Selector
    $("button").hover(function(){
        $(this).css("background","purple");
    });

    //Class Selector

    $(".btn.btn-danger.btn-lg").click(function(){
        $("p").fadeOut(1000);
    });
    

    DisplayAll();
    LoopTen();
	
         // To create Car Object

     $("#button4").click(CarObject); 

     function CarObject() {
         var Car = {
             doors: 4,
             HonkMethod: function() {
                 console.log("HONK!");
                 for (var property in Car) {
                     console.log(property);
                 }
             }
         };
     }
     // .each function
     $("li").each(function(index, value) { 
    console.log(value);
    }); 
});