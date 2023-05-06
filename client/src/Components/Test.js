import React from 'react'

const Test = () => {
    const data = JSON.parse(localStorage.getItem("workoutPlan"));

    console.log("data : ",data);
  return (
    <>
    <div>Testing</div>
    <pre>{JSON.stringify(data,null,2)}</pre>
    </>
  )
}

export default Test