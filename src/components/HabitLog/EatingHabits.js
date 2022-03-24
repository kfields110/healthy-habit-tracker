import AddHabit from "./AddHabit";



// The component responsible for displaying all eating habits.
const EatingHabits = () => {
    const eating_choices = ['Vegetables', 'Fruit', 'Protein']

    return (
        <div>
            <AddHabit options={eating_choices} />
        </div>
    )
}

export default EatingHabits;