import { useState } from 'react'
import { projectAuth, projectFirestore, projectStorage } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const {dispatch} = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

      //create user document
      await projectFirestore.collection('users').doc(res.user.uid).set({
        displayName,
        email,
        firstName: "",
        lastName: '',
        photoURL: imgUrl,
        height: '',
        weight: '',
        age: '',
        totalPoints: '',
        eatingPoints: '',
        mentalPoints: '',
        exercisePoints: ''

      })

      //display login action
      dispatch({ type: 'LOGIN', payload: res.user })


      setIsPending(false)
      setError(null)
    } 
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { signup, error, isPending }
}