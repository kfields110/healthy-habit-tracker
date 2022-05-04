import AddHabit from "./AddHabit";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
import HabitList from "./HabitList";


//Requirement 2.2.3
// The component responsible for displaying all eating habits.
const MentalHabits = () => {
    const [habits, setHabits] = useState([]);
    const eating_choices = [];

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {
        setIsPending(true)

        projectFirestore.collection('habits').where("Type","==",'mental').get().then((snapshot) => {
            if(snapshot.empty){
                setError('No Habits Loaded')
                setIsPending(false);
            } else {
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setData(results)
            }
        }).catch(err => {
            setError(err.message);
        });

    }, [])
   
    return (
        <div>
            {/* <AddHabit options={eating_choices} /> */}
           {data && <HabitList habits={data}/>}
        </div>
    )
}

export default MentalHabits;