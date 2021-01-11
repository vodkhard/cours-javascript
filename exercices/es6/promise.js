// Implémentez les fonctions suivantes :
// getStudents: retourne une Promise qui retourne une liste d'élèves entre 1 et 2 secondes | [{name: 'Hugo', classes: [1, 2]}]
// getClasses: retourne une Promise qui retourne une liste de cours entre 2 et 4 secondes | [{id:1, name:'PHP'},{id:2, name:'JS'}]
// getDefinitiveClasses: retourne une Promise qui mappe les élèves et les cours entre 1 et 4 secondes | [{name:'Hugo', classes: ['PHP','JS']}]
// toutes le sméthodes doivent indiquer dans la console le temps d'exécution | 'getStudents:1,45'
// getDefinitiveClasses retourne 'Timeout' si le temps d'exécution total dépasse les 7 secondes