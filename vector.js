{
  "cards": [
    {
      "question": "Comment déclarer un vector en C++ ?",
      "reponse": "<code>#include &lt;vector&gt;</code><br><br><code>vector&lt;int&gt; nombres;</code><br><code>vector&lt;string&gt; mots;</code>"
    },
    {
      "question": "Comment ajouter un élément à la fin d'un vector ?",
      "reponse": "<code>vec.push_back(valeur);</code><br><br>Ajoute un élément à la fin du vector."
    },
    {
      "question": "Comment accéder au premier et dernier élément d'un vector ?",
      "reponse": "<strong>Premier :</strong> <code>vec.front()</code> ou <code>vec[0]</code><br><br><strong>Dernier :</strong> <code>vec.back()</code> ou <code>vec[vec.size()-1]</code>"
    },
    {
      "question": "Comment obtenir la taille d'un vector ?",
      "reponse": "<code>vec.size()</code> retourne le nombre d'éléments.<br><br><code>vec.empty()</code> retourne true si le vector est vide."
    },
    {
      "question": "Comment supprimer le dernier élément d'un vector ?",
      "reponse": "<code>vec.pop_back();</code><br><br>Retire le dernier élément du vector."
    },
    {
      "question": "Comment parcourir un vector avec une boucle ?",
      "reponse": "<strong>Méthode 1 :</strong><br><code>for(int i = 0; i < vec.size(); i++)</code><br><br><strong>Méthode 2 :</strong><br><code>for(auto element : vec)</code>"
    }
  ]
}
