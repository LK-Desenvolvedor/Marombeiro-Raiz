import './App.css';
import React, { useEffect } from 'react';

function App() {
   const [username, setUsername] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [wrongLogin, setWrongLogin] = React.useState(false);
   const [newusername, setnewUsername] = React.useState('');
   const [newpassword, setnewPassword] = React.useState('');
   const [wrongRegister, setWrongregister] = React.useState(false);
   const [isChecked, setIsChecked] = React.useState(false); // Adicionado estado para controlar o checkbox

   const handleSubmit = (event) => {
     event.preventDefault();
 
     if (username === 'user' && password === '1234') {
       window.location.href = '/'
     } else {
       setWrongLogin(true);
     }
   }

  return (
    <div className="section">
      <Carrossel/>
      <div className="App">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3"><span>Log In / </span><span>Sign Up</span></h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <h1>Conosco é que se constrói fibra</h1>
                        <br></br>
      <img src="marombeiro.png" alt="logo" width="200" />
                        <div className="form-group">
                          <input type="email" className="form-style" placeholder="Email" />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group mt-2">
                          <input type="password" className="form-style" placeholder="Password" />
                          <i className="input-icon uil uil-lock-alt" />
                        </div>
                        <a href="" className="btn mt-4">Login</a>
                        <p className="mb-0 mt-4 text-center">
                          <a href="" className="link">Forgot your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-3 pb-3">Sign Up</h4>
      <img src="marombeiro.png" alt="logo" width="200" />
                        <div className="form-group">
                          <input type="text" className="form-style" placeholder="Full Name" />
                          <i className="input-icon uil uil-user" />
                        </div>
                        <div className="form-group mt-2">
                          <input type="tel" className="form-style" placeholder="Phone Number" />
                          <i className="input-icon uil uil-phone" />
                        </div>
                        <div className="form-group mt-2">
                          <input type="email" className="form-style" placeholder="Email" />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group mt-2">
                          <input type="password" className="form-style" placeholder="Password" />
                          <i className="input-icon uil uil-lock-alt" />
                        </div>
                        <a href="" className="btn mt-4">Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Carrossel() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const numberOfImages = 13; // substitua pelo numero de imagens da pasta
  const images = Array.from({ length: numberOfImages },
     (_, index) => `carrossel/${index + 1}.png`);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="car">
      <button onClick={prevSlide}>Anterior</button>
      <img src={images[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
}

export default App;


