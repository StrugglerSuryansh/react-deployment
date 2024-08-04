"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userdata, setuserdata] = useState([])
  const GetData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list")
    const a = JSON.stringify(res.data)
    console.log(a)
    setuserdata(a)
  }
  return (
    <div>
      <button className='bg-green-400 px-4 py-1 m-4 rounded-full'
        onClick={GetData}>click</button>
      {userdata}
    </div>
  )
}

export default page
