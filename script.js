// Fonction pour générer les cartes à partir des données JSON
function generateCards(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.cards.forEach((card, index) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper';
        
        cardWrapper.innerHTML = `
            <div class="card" onclick="this.classList.toggle('flipped')">
                <div class="card-face card-front">
                    <span class="card-number">${index + 1}</span>
                    <div class="question">${card.question}</div>
                    <span class="hint">Cliquez pour voir la réponse</span>
                </div>
                <div class="card-face card-back">
                    <span class="card-number">${index + 1}</span>
                    <div class="answer">${card.reponse}</div>
                </div>
            </div>
        `;
        
        container.appendChild(cardWrapper);
    });
}

// Fonction pour charger un fichier JSON et générer les cartes
function loadFlashcards(jsonFile, containerId) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            generateCards(data, containerId);
        })
        .catch(error => {
            console.error(`Erreur lors du chargement de ${jsonFile}:`, error);
            const container = document.getElementById(containerId);
            container.innerHTML = `
                <div style="color: white; text-align: center; grid-column: 1/-1; padding: 50px;">
                    <h2>❌ Erreur de chargement</h2>
                    <p>Impossible de charger les flashcards.</p>
                </div>
            `;
        });
}

// Navigation entre les pages
function showPage(pageId) {
    // Cache toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Retire la classe active de tous les liens
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Affiche la page sélectionnée
    document.getElementById(pageId).classList.add('active');
    
    // Active le lien correspondant
    const activeLink = document.querySelector(`a[href="#${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Charge les flashcards si nécessaire
    const container = document.getElementById(`${pageId}Cards`);
    if (container && container.children.length === 0) {
        loadFlashcards(`${pageId}.json`, `${pageId}Cards`);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Charge les flashcards cin.ignore() par défaut (optionnel)
    // loadFlashcards('cin.json', 'cinCards');
});
