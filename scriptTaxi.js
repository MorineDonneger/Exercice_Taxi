//Exo 1 : Le taxi
//John essaie de rentrer chez lui en taxi.
//Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
//Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
//Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux rouges de chez lui.
//À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
//Deux possibilités de fin :
//- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et qu’il lui a fallu x changements de taxi pour y arriver
//- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
//Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
//Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
//Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements

"use strict";

// J'ai affecté des valeurs nécessaires pour le code à des variable et j'ai crée un tableau avec les 5 musiques
let prenom = "John";
let pointSanteMentale = 10;
let musiques = ["Anissa de Wejdene","Call Out My Name de The Weeknd","Lift Me Up de Rihanna","Alone de Burna Boy","Am I Dreaming de Metro Boomin"];
let musiqueInterditAW = "Anissa de Wejdene"
let feuxTotal = 30;
let changements = 0;
let radioMusique;
let radioM;

function rencontreFeu(santeMentale,musiqueInterdit,feuxRouges,changements){ //Je créé une fonction avec les paramètre necessaire.
    while(santeMentale != 0 && feuxRouges > 0){ //Tant qu'il reste d'un feu rouge à passer ET que sa santé mentale n'est pas détruite, la boucle s'exécute
        radioMusique = (Math.floor(Math.random() * 5 + 1)) //J'affecte un nombre aléatoire à radioMusique entre 1 et 5

        switch(radioMusique){ //Je "transcrit" le chiffre aléatoire avec la musique avec qui il correspond
            case 1:
                radioM = "Anissa de Wejdene";
                break;
            case 2:
                radioM = "Call Out My Name de The Weeknd";
                break;
            case 3:
                radioM = "Lift Me Up de Rihanna";
                break;
            case 4:
                radioM = "Alone de Burna Boy";
                break;
            case 5:
                radioM = "Am I Dreaming de Metro Boomin";
                break;
        }

        if(radioM == musiqueInterdit){ //Si la musique qui passe à la radio est la musique détesté par le personnage,
            santeMentale -- //Alors celle-ci descend de 1 point,
            changements ++ //Et il change de Taxi donc dans changements on rajoute 1
            console.log(`La musique jouée est ${radioM}. John n'est pas content, il descend du taxi, en prend un autre et sa santé mentale est désormais à ${santeMentale}. Il reste toujours ${feuxRouges} feux à passer.`); //J'affiche dans le navigateur cette phrase
        }else{ //Si c'est une bonne musique qui passe,
            feuxRouges -- //On passe le feu rouge donc feuxRouges soustrait de 1
            console.log(`La musique jouée est ${radioM} et il reste ${feuxRouges} feux à passer.`); //J'affiche sur le navigateur cette première phrase
        }
    }
    if(santeMentale == 0){ //Si sa santé mentale est à 0,
        console.log(`Explosion de ${prenom} !!!`); //John est à bout, il n'a plus de santé mentale et on affiche ce message.
    }else if(santeMentale != 0){ //S'il ne reste plus de feu à passer et que sa santé mentale n'est pas à 0,
        console.log(`${prenom} est bien arrivé chez lui. Il lui aura fallu ${changements} changements de Taxi`); //On affiche alors cette phrase
    }
}

rencontreFeu(pointSanteMentale,musiqueInterditAW,feuxTotal,changements);