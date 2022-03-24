import AddHabit from "./AddHabit";

// The component responsible for displaying all exercise habits.
const ExerciseHabits = () => {
    const eating_choices = ['Running', 'Swimming', 'Biking']

    return (
        <div>
            <AddHabit options={eating_choices} />
        </div>
    )
}

export default ExerciseHabits;