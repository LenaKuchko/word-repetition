

$(function () {
  $("#btn").click (function () {
    var sent = $("#sent").val();
    var lowerSent = sent.toLowerCase();
    var splitSent = lowerSent.split(" ");

    splitSent.sort();
    var result = [];

    for (i = 0; i < splitSent.length; i++) {
      var counter=0;
      for (var j = 0; j < splitSent.length; j++) {
        if (splitSent[i]===splitSent[j]) {
          counter++;
        }
      }
      if ((result[result.length - 1]) !== ("'" + splitSent[i] + "'" + " repeats " + counter + " times")) {
        result.push("'" + splitSent[i] + "'" + " repeats " + counter + " times");
      }
    };
    result.forEach(function(line) {
    $(".result").append("<li>" + line + "</li>");
    });

    $("#result").show();
  });
});

///////Charles's version///////
// textArray.forEach(function(word1) {
//       var counter = 0;
//       textArray.forEach(function(word2){
//         if (word1 === word2) {
//           counter ++;
//         }
//       });

//       var wordAndCount = word1 + ": " + counter;

//       if ((word1 !== "") && (result.indexOf(wordAndCount) === -1)) {
//         result.push(wordAndCount);
//       }
//     });
