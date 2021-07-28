import React, {ChangeEventHandler} from 'react';
import './App.css';

function App() {

    // TODO Gestion controllé state associé au champ de recherche

    // TODO Initialisation du Hook

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        // TODO Gestion controllé de l'événement de saisie de l'input
    }

    return (
        <div className="App">
            <main>
                <form>
                {/*TODO formulaire de recherche de Gifs */}
                    <label htmlFor="search">Champ de saisie:</label>
                    <input alt="image giphy" type="text" id="search" name="search" onChange={handleOnChange} required/>
                </form>
                <div>
                    {/* TODO Affichage d'une image */}
                </div>
            </main>
        </div>
    );
}

export default App;
