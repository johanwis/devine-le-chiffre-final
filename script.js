var calc=Math.round (Math.random() * 100 + 1);
var essai=0;
var reload=document.getElementById('reload');
var ok=document.getElementById('ok');
var ok2=document.getElementById('ok');
var centun=100+1;
var moinsun=0;

ok.addEventListener('click', function () {
    var saisinb=document.getElementById('saisinb').value;
    essai++;
    statut = "Nombre d'essais : " + essai;
    console.log(calc);
    if (saisinb >calc){
        document.getElementById('reponse').innerHTML='Désoler le nombre que vous avez saisi est trop grand';
        window.alert("DOMMAGE mais il reste des essai vous allez trouver le bon chiffre"+"\n"+"vous avez utiliser" +"\n"+essai+"  essai sur 10");
        document.getElementById('body').style.backgroundColor='red';
        console.log('grand');
    }
    else if (saisinb <calc){
        document.getElementById('reponse').innerHTML='Désoler le nombre que vous avez saisi est trop petit';
        window.alert(" DOMMAGE mais il reste des essai vous allez trouver le bon chiffre"+"\n"+"vous avez utiliser" +"\n"+essai+"  essai sur 10");
        document.getElementById('body').style.backgroundColor='red';
        console.log('petit');
    }


    else {
        document.getElementById( 'reponse' ).innerHTML = 'Bravo vous avez trouvez le bon nombre' + '\n' + 'si vous voulez refaire une partie cliquez sur le boutons rejouer';
        window.alert( "BRAVO vous gagner vous avez trouvé le chiffre en " + "\n" + essai + "essai sur 10" + "\n" + "si vous voulez refaire une partie cliquez sur le boutons rejouer" );
document.getElementById('gif').innerHTML='<img src="leonardo.gif" alt="gif victoire">'+"<br>"+"BRAVO";
        document.getElementById( 'body' ).style.backgroundColor = 'green';
        console.log( 'bravo' );
    }
});

ok2.addEventListener('click', function () {
    var saisinb=document.getElementById('saisinb').value;


    if (saisinb >=centun)
    {
        document.getElementById( 'reponse' ).innerHTML = 'Veuillez saisir un nombre entre  1 et 100';
        document.getElementById('body').style.backgroundColor='red';
        console.log('resaisir');
    }
    else if (saisinb<=moinsun)
    {
        document.getElementById('reponse').innerHTML='Veuillez saisir un nombre entre  1 et 100';
        document.getElementById('body').style.backgroundColor='red';

        console.log('resaisir');
    }
    else if (essai===10){
        window.alert("Désolé, c'est fini. Le nombre correct était :" + calc+"\n"+"la prochaine fois vous devinerez peut-être le bon nombre");
        location.reload();

    }

});
reload.addEventListener('click', function () {
    location.reload();

});
