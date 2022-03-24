import Tabs from "../components/HabitLog/HabitTabs";
import "../components/HabitLog/HabitTabs.css";
import ExerciseHabits from "../components/HabitLog/ExerciseHabits";
import EatingHabits from "../components/HabitLog/EatingHabits";
import MentalHabits from "../components/HabitLog/MentalHabits";

const HabitLog = () => {
  // This is a simple pointer to the HabitLog page to use in the Navlink on the main App.js router

    return (

        <div>
        <h1>Habit Logging</h1>
        <Tabs>
          <div label="Exercise">
            <ExerciseHabits />
          </div>
          <div label="Healthy Eating">
            <EatingHabits />
          </div>
          <div label="Mental Health">
            <MentalHabits />
          </div>
        </Tabs>
      </div>
    );
}

export default HabitLog;