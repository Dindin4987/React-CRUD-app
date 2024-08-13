import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
      navigate('/')
    }
    return (
    <>
        <div>
          <h2>Add New User</h2>
        </div>
            
        <form onSubmit={handleSubmit} className='w-50 border bg-secondary text-white p-5'>  
  <div className="mb-3">
    <label htmlFor='name' className="form-label">Name</label>
    <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={e => setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor='email' className="form-label">Email</label>
    <input type="email" name='email' className="form-control" id="exampleInputPassword1"
    onChange={e => setEmail(e.target.value)}/>
  </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )

}

export default Create