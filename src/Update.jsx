import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const { name, email } = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }
  return (
      <div>
          <div>
          <h2>Update User</h2>
        </div>
            
        <form onSubmit={handleUpdate} className='w-50 border bg-info text-white p-5'>  
  <div className="mb-3">
    <label htmlFor='name' className="form-label">Name</label>
    <input type="text" name='name' value={uname} onChange={e => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor='email' className="form-label">Email</label>
    <input type="email" name='email' value={uemail} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
    <button type="submit" className="btn btn-primary">Update</button>
</form>
    </div>
  )
}

export default Update