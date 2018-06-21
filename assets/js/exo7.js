function number(){
  //déclaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result = (shoeSize * 2 + 5) * 50 - yearOfBirth + 1766;
  var regex = /^[0-9]+/;
  //test de sécurité
  if ((regex.test(shoeSize) == true) && (regex.test(yearOfBirth) == true)){
    alert(result);
  }else{
    //message d'erreur
    alert('uniquement des nombres');
  }
}
