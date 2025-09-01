import { useState } from "react";

const initialGenders =[
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]
function App() {
   const [newFilm, setNewFilm] = useState('');

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
                {initialGenders.map((film,index) => {
                  return (
                  <li className="list-group-item" key={index}>
                    {film.title} - {film.genre}
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
              <select class="form-select" aria-label="Default select example">
               <option selected>Filtra per genere:</option>
                <option>Fantascienza</option>
                <option>Thriller</option>
                <option>Romantico</option>
                <option>Azione</option>
                <option>Fantascienza</option>
                <option>Thriller</option>
              </select>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
