import { useState } from 'react'
import './modalChangeName.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserName } from '../../redux/authSlice'

export default function Modal({setIsOpen}) {
      let username = localStorage.getItem('userName')
      let token = useSelector((state) => state.user?.token)
      const dispatch = useDispatch()

      const [newUsername, setUsername] = useState({"userName": ''});
      function handleInput(e) {
            setUsername({userName: e.target.value})
      }

      function handleSubmit(e) {
            e.preventDefault()
            dispatch((changeUserName(newUsername, token)))
            .then((action) => {
                  if(action.payload) {
                        setIsOpen(false)
                  }
            })
      }

      return (
            <>
                  <div className="darkBG">
                        <div className="centered">
                              <div className="modal">
                                    <div className="modalHeader">
                                          <h5 className="heading">Edit Username</h5>
                                          <form onSubmit={handleSubmit}>
                                                <div className='flex'>
                                                      <div className='modalContent'>
                                                            Current Username 
                                                      </div>
                                                      <div className='modalContentDesc'>
                                                            {username}
                                                      </div>
                                                      <div className='modalContent input-wrapper'>
                                                            New Username 
                                                      </div>
                                                      <input className='modalContent' name='userName' type='text' autoComplete="off" onChange={handleInput} required></input>
                                                      <div className='modalContent input-wrapper'>
                                                            Are you sure you want to change your username ?
                                                      </div>
                                                      <div className="modalActions">
                                                            <div className="actionsContainer">
                                                                  <input type='submit' value='Accept' className="deleteBtn"></input>
                                                                  <input type='button' value='Cancel' className="cancelBtn" onClick={() => setIsOpen(false)}></input>
                                                            </div>
                                                      </div>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>

      )
}