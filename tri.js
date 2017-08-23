var modeTri="";

function triAge(){
  modeTri="age";
  non();
}

function triMetier(){
  modeTri="metier";
  non();
}

function triNom(){
  modeTri="nom";
  non();
}

function non(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var tableau = myObj.client;


      tableau.sort(function (a, b) {
        if (a[modeTri]<b[modeTri]) {
          return -1;
        }
        else if (a[modeTri]>b[modeTri]) {
          return 1;
        }
        else(a[modeTri]==b[modeTri])
        return 0;
      }
    );
    console.log(modeTri);
    console.table(tableau);







      //
      // var Bernard = tableau[0];
      // var Jacques = tableau[1];
      // var Marcel = tableau[2];
      //
      // var prenom = [Bernard.nom,Jacques.nom,Marcel.nom]
      // var age = [Bernard.age,Jacques.age,Marcel.age]
      // var metier = [Bernard.metier,Jacques.metier,Marcel.metier]
      //
      // if (modeTri=="age") {
      //   age.sort();
      // }
      // if (modeTri=="metier") {
      //   metier.sort();
      // }
      // if (modeTri=="prenom") {
      //   prenom.sort();
      // }
      //
      // console.log(prenom);
      // console.log(age);
      // console.log(metier);

    }
  };
  xmlhttp.open("GET", "tri.JSON", true);
  xmlhttp.send();

}
