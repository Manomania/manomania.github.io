# 🎓 Flashcards C++ - Multi-Pages

Système de flashcards modulaire avec navigation entre différents sujets.

## 📁 Structure du projet

```
flashcards-cpp/
│
├── index.html          ← Page principale avec navigation
├── style.css           ← Tous les styles CSS
├── script.js           ← Logique JavaScript
│
├── cin.json            ← Flashcards cin.ignore()
├── vectors.json        ← Flashcards vectors
└── pointers.json       ← Flashcards pointeurs
```

## 🚀 Installation sur GitHub Pages

1. **Crée un nouveau repository sur GitHub**
   - Nom : `flashcards-cpp` (ou autre)
   - Public

2. **Upload tous les fichiers**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TON-USERNAME/flashcards-cpp.git
   git push -u origin main
   ```

3. **Active GitHub Pages**
   - Settings → Pages
   - Source: main branch
   - Save

4. **Accède à ton site**
   - https://ton-username.github.io/flashcards-cpp/

## ✏️ Ajouter de nouveaux sujets

### 1. Créer un nouveau fichier JSON

Crée `nouveau-sujet.json` :
```json
{
  "cards": [
    {
      "question": "Ta question ici",
      "reponse": "Ta réponse ici"
    }
  ]
}
```

### 2. Modifier index.html

Ajoute dans la navigation :
```html
<li><a href="#nouveau" class="nav-link" onclick="showPage('nouveau')">🔥 Nouveau Sujet</a></li>
```

Ajoute une nouvelle page :
```html
<div id="nouveau" class="page">
    <div class="flashcards-container">
        <h1>🔥 Flashcards: Nouveau Sujet</h1>
        <div class="cards-grid" id="nouveauCards"></div>
    </div>
</div>
```

Ajoute dans la page d'accueil :
```html
<a class="topic-card" onclick="showPage('nouveau')">
    <h3>🔥 Nouveau Sujet</h3>
    <p>X cartes · Description</p>
</a>
```

C'est tout ! Le script.js chargera automatiquement `nouveau.json` quand tu cliques sur la page.

## 🎨 Personnalisation

### Changer les couleurs du gradient
Dans `style.css`, ligne 7 :
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Changer la couleur des cartes
Dans `style.css`, lignes pour `.card-back` :
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

## 🧪 Tester en local

Tu ne peux pas ouvrir directement `index.html` à cause de `fetch()`. Utilise un serveur :

**Python :**
```bash
python -m http.server 8000
```

**Node.js :**
```bash
npx http-server
```

**VS Code :**
Extension "Live Server"

Puis ouvre : http://localhost:8000

## 💡 Tips

- Les fichiers JSON supportent le HTML dans les questions/réponses
- Utilise `<code>` pour du code
- Utilise `<br>` pour des sauts de ligne
- Utilise `<strong>` pour du texte en gras
