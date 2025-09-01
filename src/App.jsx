const initialgenders =[
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
            <h1>Lista generi di film</h1>
            <div className="col-12">
              <ul className="list-unstyled list group ms-0">
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
