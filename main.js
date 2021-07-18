var images=["grandfather.png","grandmother.jfif","father.png","mother.png","son.jfif"];
var names=["N.P.Sinha","Shail Sinha","H.K.Srivastava","Anupama Srivastava","Atharva Srivastava"];
var i=0;
function nmof(){
    if(i==5){i=0;}
    document.getElementById("iofm").src=images[i];
    document.getElementById("nofm").innerHTML=names[i];
    i++;
}