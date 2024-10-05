// 1 : Aléatoire
const déResultat = Math.floor(Math.random() * 6) + 1;

// 2 : Les valeurs sont assignées par des images
const déImages = {
    1: 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_1280.png',
    2: 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312627_1280.png',
    3: 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624_1280.png',
    4: 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_1280.png',
    5: 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622_1280.png',
    6: 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621_1280.png'
};
    
// 4 : Met à jour le texte du résultat
document.getElementById('resultat_texte').innerText = `Vous avez obtenu la face du dé : ${déResultat} !`;
    
// 5 : Met à jour l'image affichée
document.getElementById('dé_image').src = déImages[déResultat];
