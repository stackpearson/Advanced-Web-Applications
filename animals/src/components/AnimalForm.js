import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory} from 'react-router-dom';

const initialAnimal = {
    name: '',
    sound: '',
    classification: { species:'' }
}

export default function AnimalForm({animals, updateAnimals }) {

    const [ updating, setUpdating ] = useState(false);
    const [animalToUpdate, setAnimalToUpdate] = useState(initialAnimal);
    // const {id} = useParams();
    const {goBack} = useHistory()

    const editAnimal = animal => {
        setUpdating(true);
        setAnimalToUpdate(animal);
    }

    const saveUpdate = e => {
        e.preventDefault();
        // How can we update the animal information?
        // Where can we get the ID? 
        // Where is the information stored?
        axiosWithAuth()
        .put(`/animals/${animalToUpdate.id}`, animalToUpdate)
        .then((res) => {
            console.log('put request from AnimalForm', res)
            window.location.href='/creatures'
        })
        .catch((err) => {
            console.log('error in put request', err)
        })

    }

    const deleteAnimal = animal => {
        // How can we delete an animal?
        axiosWithAuth()
        .delete(`/animals/${animalToUpdate.id}`, animalToUpdate)
        .then((res) => {
            console.log('succesfull delete', res)
            window.location.href='/creatures'
        })
        .catch((res) => {
            console.log('delete failed', res)
        })
    }

    return (
        <div className="animals-list">
            <ul className="organized">
                {animals.map(animal => (
                    <li key={animal.name} onClick={() => editAnimal(animal)} className="edit-animals">
                        <span>
                            <span className='delete-button' onClick={e => {
                                    e.stopPropagation();
                                    editAnimal(animal);
                                    deleteAnimal(animal)
                                }
                            } >
                                X
                            </span>{" "}
                            {animal.name}
                        </span>
                    </li>
                ))}
            </ul>
            { updating && (
                <form onSubmit={saveUpdate}>
                    <legend>Update Animal</legend>
                    <label>
                        Name:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ ...animalToUpdate, name: e.target.value })
                            }
                            value={animalToUpdate.name}
                        />
                    </label>
                    <label>
                        Sound:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ ...animalToUpdate, sound: e.target.value })
                            }
                            value={animalToUpdate.sound}
                        />
                    </label>
                    <label>
                        Classification:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ 
                                    ...animalToUpdate, 
                                    classification: { species: e.target.value }
                                })
                            }
                            value={animalToUpdate.classification.species}
                        />
                    </label>
                    <div>
                        <button type="submit">Update</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}