import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchListOfUsers  = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUsers(response.data))
      .catch(error => setError(error))
  }

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  return (
    <div>
      {
        error?
        <h1>
          Error loading data: {error.message}
        </h1>
        :
        <>
          <ul>
            {
              listOfUsers.map( user => 
              <li key={user.id}>
                {console.log(user)}
                <ul>
                  <li><h5 className="read-the-docs">Name: </h5><p>{user.name}</p></li>
                  <li><h5 className="read-the-docs">Email: </h5><p>{user.email}</p></li>
                  <li><h5 className="read-the-docs">Phone: </h5><p>{user.phone}</p></li>

                </ul>
              </li>)
            }
          </ul>
        </>
      }
      
    </div>
  )

}
export default UserList