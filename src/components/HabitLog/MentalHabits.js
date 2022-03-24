import AddHabit from "./AddHabit";

// The component responsible for displaying all mental health habits.
const MentalHabits = () => {
    const mental_choices = ['Reading', 'Meditating', 'Therapy']

    return (
        <div>
            <AddHabit options={mental_choices} />
        </div>
    )
}

export default MentalHabits;