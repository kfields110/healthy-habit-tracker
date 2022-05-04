import {useEffect, useState} from 'react'
import { projectFirestore } from '../firebase/config'

//Hook to access specific documents in a collection
//Requirement 8.1.0

export const useDocument = (collection, id) => {
    const [document, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)

        const unsubscribe = ref.onSnapshot((snapshot) => {
            setDocuments({...snapshot.data(), id:snapshot.id})
            setError(null)
        }, (err) => {
            console.log(err.message)
            setError('failed to get document')
        })

        return () => unsubscribe()

    }, [collection,id])

    return {document, error}
}