import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './UserReducer';


function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }
    
  return (
    <div className='row'>
      <div className='col-6'>
          <h2>CRUD App</h2>
          <Link to="/create" type="Link " className="btn btn-primary my-3">Create New User</Link>
          <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {users.map((user, index) => (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.id}`} className="btn btn-success">Edit</Link>
                    <button onClick={() => handleDelete(user.id)} className="btn btn-danger ms-2">Delete</button>
                </td>
        </tr>
    ))}
  </tbody>
</table>
        
      </div>
    </div>
  )
}

export default Home