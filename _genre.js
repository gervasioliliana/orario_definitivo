var libChoixGenre = "Ricerca per:";
var listeGenres = new Array ()
listeGenres [0] = new GenreRessource ("grProf","DOCENTI");
listeGenres [1] = new GenreRessource ("grClasse","CLASSI");

function GenreRessource (aGenre, aLibelle) {
  this.genre   = aGenre;
  this.libelle = aLibelle;
}
