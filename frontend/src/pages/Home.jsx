import { useEffect, useState } from "react";
import axios from 'axios'
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const Home = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    //const { id } = useParams();
    
    const handleClick = (id) => {
        axios.delete("http://localhost:1001/deleteOne/" + id)
             .then((res) => {
                console.log(res)
                navigate("/")
             })
             .catch((error) => {
                console.log(error)
             })
    }

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:1001/allMovies')
             .then((res) => {
                setMovies(res.data.movies)
                console.log(res.data.movies)
                setLoading(false);
             })
             .catch((error) => {
                console.log(error)
                setLoading(false);
             })
    }, [])


    return ( 
        <div>Home
            <div>
                <h1>All movies</h1>
                <Link to='/create'>Add new movie</Link>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>Title</th>
                            <th>DirectedBy</th>
                            <th>WrittenBy</th>
                            <th>ReleaseYear</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => (
                            <tr key={movie._id}>
                                <td>{index + 1}</td>
                                <td>{movie._id}</td>
                                <td>{movie.Title}</td>
                                <td>{movie.DirectedBy}</td>
                                <td>{movie.WrittenBy}</td>
                                <td>{movie.ReleaseYear}</td>
                                <td><Link to={`/showMovie/${movie._id}`}>Detailed</Link></td>
                                <td><Link to={`/edit/${movie._id}`}>Edit</Link></td>
                                <td><Link to={`/delete/${movie._id}`}>Delete</Link></td>
                                <td><button onClick={() => handleClick(movie._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Home;