import '../App.css';

function App() {

  const userImageUrl = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

  return (
    <>
      <nav className="navbar">
        <div className="navbar-right">
          <h1 className="navbar-logo">MyApp</h1>
        </div>
        <div className="navbar-right">
          <img
            src={userImageUrl}
            alt="User"
            className="navbar-user-image"
          />
        </div>
      </nav>
    </>
  );
}

export default App;
