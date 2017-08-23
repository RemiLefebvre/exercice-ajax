var modeTri = "";

function tri(x) {
  modeTri = x;
  non();
}

function non() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var tableau = myObj.client;

      tableau.sort(function(a, b) {
        if (a[modeTri] < b[modeTri]) {
          return -1;
        } else if (a[modeTri] > b[modeTri]) {
          return 1;
        } else(a[modeTri] == b[modeTri])
        return 0;
      });
      console.table(tableau);
      $("tbody").empty();

      for (var i = 0; i < tableau.length; i++) {
        $("tbody").append("<tr></tr>");
        $("tr:last").append("<td>" + tableau[i].nom + "</td>");
        $("tr:last").append("<td>" + tableau[i].age + "</td>");
        $("tr:last").append("<td>" + tableau[i].metier + "</td>");
      }
    }
  };
  xmlhttp.open("GET", "tri.JSON", true);
  xmlhttp.send();
}
