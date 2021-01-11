// Implémentez les méthodes suivantes dans le prototype de l'objet String :
// ucfirst: première lettre de la phrase en majuscule | hello world => Hello world
// capitalize: première lettre de chaque mot en majuscule | hello world => Hello World
// camelCase: première lettre de chaque mot en majuscule et les mots collés | hello world => helloWorld
// snake_case: première lettre de chaque mot en minuscule et les mots reliés par un _ | hello world => hello_world
// leet_speak: "cryptage" transformer les voyelles en chiffres en suivant la table de conversion suivante : a=>4, e=>3, i=>1, o=>0, u=>(_), y=>7 | hello world => h3ll0 W0rld
// reverse_word: inverser les lettres de chaque mot d'une phrase | hello world => olleh dlrow
// yoda_style: inverser la position des mots dans une phrase | hello world => world hello
// vigenere: regardez ici : https://fr.wikipedia.org/wiki/Chiffre_de_Vigenère (le mot clé est "javascript") | hello world => qeglg yfzaw


'hello world'.ucfirst() === 'Hello world'
'hello world'.capitalize() === 'Hello World'
'hello world'.camelCase() === 'helloWorld'
'hello world'.snake_case() === 'hello_world'
'hello world'.leet_speak() === 'h3ll0 W0rld'
'hello world'.reverse_word() === 'olleh dlrow'
'hello world'.yoda_style() === 'world hello'
'hello world'.vigenere() === 'qeglg yfzaw'