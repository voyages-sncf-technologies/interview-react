import React, {ChangeEventHandler,  useState} from 'react';
import './App.css';
import useSearch from "./api/useSearch";

function App() {

    // TODO Gestion controllé state associé au champ de recherche
    const [search, setSearch] = useState<string | undefined>(undefined)

    // TODO Initialisation du Hook
    const url = useSearch(search)

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        // TODO Gestion controllé de l'événement de saisie de l'input
        setSearch(event.target.value)
    }

    return (
        <div className="App">
            <main>
                {/*TODO formulaire de recherche de Gifs */}
                <form>
                    <label htmlFor="search">Champ de saisie:</label>
                    <input alt="image giphy" type="text" id="search" name="search" onChange={handleOnChange} required/>
                </form>
                <div>
                    {url && <img src={url}/>}
                </div>
            </main>
        </div>
    );
}

export default App;
