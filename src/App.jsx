import { useState, useEffect } from "react";

const initialFilms =[
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]
function App() {
   const [newFilm, setNewFilm] = useState('');
   const [genre, setGenre] = useState("")
   const [filteredFilms, setFilteredFilms] = useState(initialFilms);

   useEffect(() => {
    if(genre === '') {
      setFilteredFilms(initialFilms)
    } else {
      setFilteredFilms(
        initialFilms.filter((film) => film.genre === genre)
      );
    }
   }, [genre]);

   const handleSubmit = (e) => {
    e.preventDefault();
    alert("Scelta aggiornata!");
   };
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 gy-3">
            <h1 className="mb-3">Lista generi di film</h1>
            <div className="col-12">
              <ul className="list-unstyled list-group ms-0">
                {filteredFilms.map((film,index) => {
                  return (
                  <li className="list-group-item" key={index}>
                    {film.title}
                  </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-8">
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="d-flex">
                  <input 
                  type="text"
                  className="form-control me-2"
                  placeholder="Inserisci un titolo" 
                  value={newFilm}
                  onChange={(e) => setNewFilm(e.target.value)}                 
                   />
                   <button className="btn btn-success">Inserisci</button>
                </div>
              </form>
            </div>
            <div className="col-4 mt-4">
              <select 
              className="form-select"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              >
                <option value="">Filtra per genere:</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
              </select>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
