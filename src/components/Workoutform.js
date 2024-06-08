import React, { useState } from 'react'

function Workoutform() {
    const [title , setTitle] = useState('')
    const [load , setLoad] = useState('')
    const [reps , setReps] = useState('')


    const handlesubmit = async (e)=>{
        e.preventDefault()
        const workout = {title , load , reps}
        try{
            const response = await fetch('http://localhost:5000/api-workouts/' , {
                method : 'POST' , 
                body : JSON.stringify(workout),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })

            if(!response.ok) return <div>error</div>
            else return <div>item posted</div>
        }
        catch(err){
            console.log(`unable to post data due to ${err}`)
        }
    }

    return (
    <div>
        Workoutform
        <form>
            <label>
                enter title
            <input
                className='border block'
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
            />
            </label>
            <label>
                enter number
            <input
                className='border block'
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            </label>
            <label>
                enter reps
            <input
                className='border block'
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            </label>
            <input
                className='border p-1'
                type='submit'
                onClick={(e) => handlesubmit(e)}
            />
        </form>
    </div>
  )
}

export default Workoutform