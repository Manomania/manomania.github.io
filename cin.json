{
  "cards": [
    {
      "question": "Qu'est-ce que <code>cin.ignore()</code> ?",
      "reponse": "C'est une fonction de la classe <code>istream</code> qui permet d'ignorer (supprimer) des caractères du flux d'entrée."
    },
    {
      "question": "Quelle est la syntaxe complète de <code>cin.ignore()</code> ?",
      "reponse": "<code>cin.ignore(n, delim)</code><br><br><strong>n</strong> : nombre max de caractères à ignorer<br><strong>delim</strong> : caractère délimiteur (optionnel)"
    },
    {
      "question": "Pourquoi utiliser <code>cin.ignore()</code> après <code>cin >> variable</code> ?",
      "reponse": "Pour supprimer le caractère de nouvelle ligne (<code>\\n</code>) laissé dans le buffer après une lecture avec <code>>></code>, qui sinon serait lu par <code>getline()</code>."
    },
    {
      "question": "Quelle est la forme la plus courante de <code>cin.ignore()</code> ?",
      "reponse": "<code>cin.ignore(numeric_limits&lt;streamsize&gt;::max(), '\\n')</code><br><br>Ignore tous les caractères jusqu'au prochain <code>\\n</code> inclus."
    },
    {
      "question": "Que fait <code>cin.ignore()</code> sans paramètres ?",
      "reponse": "Ignore exactement 1 caractère du flux d'entrée.<br><br>Équivalent à <code>cin.ignore(1)</code>"
    },
    {
      "question": "Cas d'usage typique : mélange de <code>cin >></code> et <code>getline()</code>",
      "reponse": "<code>int age;<br>cin >> age;<br>cin.ignore(); // Important !<br>string nom;<br>getline(cin, nom);</code>"
    },
    {
      "question": "Que se passe-t-il si on oublie <code>cin.ignore()</code> ?",
      "reponse": "<code>getline()</code> lira le <code>\\n</code> resté dans le buffer et retournera une chaîne vide au lieu d'attendre la saisie de l'utilisateur."
    },
    {
      "question": "Quelle bibliothèque inclure pour utiliser <code>numeric_limits</code> ?",
      "reponse": "<code>#include &lt;limits&gt;</code><br><br>Nécessaire pour utiliser <code>numeric_limits&lt;streamsize&gt;::max()</code>"
    },
    {
      "question": "Peut-on utiliser un délimiteur autre que <code>\\n</code> ?",
      "reponse": "Oui ! Par exemple :<br><code>cin.ignore(100, ',')</code><br><br>Ignore jusqu'à 100 caractères ou jusqu'à une virgule."
    }
  ]
}
