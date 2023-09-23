import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditMovie = () => {

    const [Title, setTitle] = useState('')
    const [DirectedBy, setDirectedBy] = useState('')
    const [WrittenBy, setWrittenBy] = useState('')
    const [ReleaseYear, setReleaseYear] = useState('')
    const [loading, setLoading] = useState(false)

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:1001/oneMovie/"+id)
             .then((res) => {
                setTitle(res.data.Title)
                setDirectedBy(res.data.DirectedBy)
                setWrittenBy(res.data.WrittenBy)
                setReleaseYear(res.data.ReleaseYear)
             })
             .catch((error) => {
                console.log(error)
             })
    }, [])
    const handleMovieEditing = (event) => {
        event.preventDefault();

        const data = {
            Title, DirectedBy, WrittenBy, ReleaseYear
        }

        axios.put("http://localhost:1001/updateMovie/" + id, data)
             .then((res) => {
                console.log(res)
                navigate('/');
             })
             .catch((error) => {
                console.log(error)
             })

    }
    return ( 
        <div>
            Edit a movie!
            <form onSubmit={handleMovieEditing}>
                <div>
                    <label htmlFor="titleInput">Title: </label>
                    <input type="text" id="titleInput"
                        value={Title}
                        onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="directedByInput">Directed by: </label>
                    <input type="text" id="directedByInput"
                        value={DirectedBy}
                        onChange={(event) => setDirectedBy(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="writtenByInput">Written by: </label>
                    <input type="text" id="writtenByInput"
                        value={WrittenBy}
                        onChange={(event) => setWrittenBy(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="releaseYearInput">Release year: </label>
                    <input type="number" id="releaseYearInput"
                        value={ReleaseYear}
                        onChange={(event) => setReleaseYear(event.target.value)}/>
                </div>
                <button>Create</button>
            </form>
        </div>
     );
}
 
export default EditMovie;