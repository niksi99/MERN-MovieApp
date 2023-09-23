import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const CreateMovie = () => {

    const [Title, setTitle] = useState('')
    const [DirectedBy, setDirectedBy] = useState('')
    const [WrittenBy, setWrittenBy] = useState('')
    const [ReleaseYear, setReleaseYear] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleMovieCreation = (event) => {
        event.preventDefault();

        const data = {
            Title, DirectedBy, WrittenBy, ReleaseYear
        }

        axios.post("http://localhost:1001/create",data)
             .then((res) => {
                console.log(res)
                navigate('/');
             })
             .catch((error) => {
                console.log(error.message)
             })
        // fetch("http://localhost:1001/create", {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // }).then(() => {
        //     console.log('Added new movie')
        //     //navigate('/');
        //     setLoading(false);
        // }).catch((error) => console.log(error.message))
    }
    return ( 
        <div>
            Add a new movie!
            <form onSubmit={handleMovieCreation}>
                <div>
                    <label htmlFor="titleInput">Title: </label>
                    <input type="text" id="titleInput"
                        required value={Title}
                        onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="directedByInput">Directed by: </label>
                    <input type="text" id="directedByInput"
                        required value={DirectedBy}
                        onChange={(event) => setDirectedBy(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="writtenByInput">Written by: </label>
                    <input type="text" id="writtenByInput"
                        required value={WrittenBy}
                        onChange={(event) => setWrittenBy(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="releaseYearInput">Release year: </label>
                    <input type="number" id="releaseYearInput"
                        required value={ReleaseYear}
                        onChange={(event) => setReleaseYear(event.target.value)}/>
                </div>
                <button>Create</button>
            </form>
        </div>
     );
}
 
export default CreateMovie;