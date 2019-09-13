

// Laver en var, der bestemmer størrelsen på skakbrættet
var size = 8;

// Laver en var, der viser ingenting (vigtigt der ikke er mellemrum her)
var board = "";


// Laver et for-loop for y der tæller en op, og går op til 7
for (var y = 0; y < size; y++) {

// Laver et for-loop inde i y for x der tæller en op, og går op til
// Hvis tallet er lige - print et mellemrum " ", ellers hvis ulige "#"
// Pointen: når y tæller 1 op (ydre loop), så tæller x 0-7 (indre loop)
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }

// Når y har talt 1 op og x 1-8, lav ny linje ( \n betyder ny linje)
  board += "\n";
}

// Vis board (skakbræt)
console.log(board);

