import React, { useState, useEffect } from 'react';
import Workoutform from './components/Workoutform';
import { useWorkoutsContext } from './hooks/useWorkoutContext';

function Home() {
    const { state: { workouts }, dispatch } = useWorkoutsContext();
    const [workoutlist, setWorkoutlist] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api-workouts/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setWorkoutlist(data.allworkouts);
            dispatch({ type: 'SET_WORKOUTS', payload: data.allworkouts });
        } catch (err) {
            console.error(`Unable to retrieve data, error: ${err}`);
        }
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>
                Home
            </h1>
            {workoutlist.map((item, index) => (
                <div key={index}>{item._id}</div>
            ))}
            <Workoutform />
        </div>
    );
}

export default Home;
