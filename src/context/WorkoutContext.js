import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            };
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            };
        default:
            return state;
    }
};

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: [] // Initializing with an empty array
    });

    return (
        <WorkoutContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    );
};
