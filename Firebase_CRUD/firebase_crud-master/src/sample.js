import React, {useState, useEffect} from 'react';

const [hospitalList, setHospitalList] = useState([])

const hospitalCollectionRef = collection(db, "hospitalList")

useEffect(() =>{
    const getAllHospital = async () => {

    }
    getAllHospital()
},[])




const sample = () => {
  return (
    <div>sample</div>
  )
}

export default sample