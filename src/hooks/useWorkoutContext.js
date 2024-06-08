import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)
    if(!context) throw Error('must be used inside an WorkoutContextProvider')
    return context
}