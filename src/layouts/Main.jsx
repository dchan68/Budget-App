import React from 'react'
import {useLoaderData, Outlet} from "react-router-dom"
import { fetchData } from '../helpers'
import Nav from "../components/Nav"

//assets
import wave from "../assets/wave.svg"

export function mainLoader(){
    const userName = fetchData("userName")
    return {userName}
}

function Main() {
  const {userName} = useLoaderData()
  return (
    <div className="layout">
        <Nav userName={userName}/>
        <main>
            <Outlet/>
        </main>
        <img src={wave} alt="" />
    </div>
  )
}

export default Main

