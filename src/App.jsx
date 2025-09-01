const initialGenders =[
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]
function App() {
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
            <div className="col-12">
              <form className="mt-4">
                <div className="d-flex">
                  <input 
                  type="text"
                  className="form-control me-2"
                  placeholder="Inserisci un titolo"                  
                   />
                   <button className="btn btn-success">Inserisci</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
