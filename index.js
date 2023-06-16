const fs = require('fs');
const crypto = require('crypto');

// Fonction pour générer le SHA256 d'une chaîne de caractères
function generateSHA256(input) {
    const hash = crypto.createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
}

// Fonction pour lire le fichier texte, générer les SHA256 et filtrer les résultats
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier:', err);
            return;
        }

        const words = data.split(/\s+/); // Divise le contenu du fichier en mots

        words.forEach((word) => {
            const sha256 = generateSHA256(word);
            if (sha256.includes('fb80')) {
                console.log(`Mot: ${word}\nSHA256: ${sha256}\n`);
            }
        });
    });
}

// Appel de la fonction avec le chemin du fichier texte
const filePath = 'mots_francais.txt';
processFile(filePath);