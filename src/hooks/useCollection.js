import {useEffect, useState, useRef} from 'react'
import { projectFirestore } from '../firebase/config'

//This hook connects to whatever Firebase collection we have set up
//and returns the information inside the collection.
//Requirement 8.1.0

export const useCollection = (collection, _query) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null)

    const query = useRef(_query).current
    


    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        if(query) {
            ref=ref.where(...query)
        }

  

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })

            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('could not fetch data')
        })

        return () => unsubscribe()
    }, [collection, query])

    return {documents, error}
}