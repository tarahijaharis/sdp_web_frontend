import React from 'react';

const CreateItem = () => {
    return(
        <div className="createItem_main">
            <div className="createItem_textboxs">
                <label htmlFor="naziv">Naziv</label>
                <input type="text" id="naziv" />
                <label htmlFor="kolicina">Kolicina</label>
                <input type="number" id="kolicina" />
            </div>
            <button className="dodajButton">Dodaj</button>
        </div>
    );
}

export default CreateItem;