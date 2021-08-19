let output = ''

function fizzBuzz(){
    
    
    for (var i = 1; i <= 15; i++){
        output += "<div class = 'row'>";
        
        if (i % 3 == 0 && i % 5 == 0){
            output += "<div>Fizzbuzz</div>";
        } else if (i % 3 == 0){
            output += "<div>Fizz</div>";
        } else if (i% 5 == 0){
            output += "<div>Buzz</div>";
        } else {
            output += "<div>"+ i + "</div>";
        }
        output += "</div>"
    }
    document.querySelector("body").innerHTML = output;
}

fizzBuzz();

