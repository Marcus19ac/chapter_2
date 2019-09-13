

//Starter med at lave et for-loop fra 1 til 100
for (var n = 1; n <= 100; n++) {

//Laver en var, som viser en string med intet indhold (ingenting)
    var output = "";

//Laver en if-statement, hvis n går op i 3, skriv "Fizz"
    if (n % 3 == 0)
        output += "Fizz";


//Laver en if-statement, hvis n går op i 5, skriv "Buzz".
// += "Buzz" betyder at "Buzz" lægges til "Fizz", hvis n går både op i 3 og 5
    if (n % 5 == 0)
        output += "Buzz";


//Fremvis enten output, eller tallet n.
    console.log(output || n);
}
