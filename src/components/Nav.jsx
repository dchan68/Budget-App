import React from 'react'
import {NavLink, Form} from "react-router-dom"
import logomark from "../assets/logomark.svg"
import { TrashIcon } from '@heroicons/react/24/solid'

function Nav({userName}) {
  return (
    <nav>
        <NavLink to="/" aria-label="Go To Home">
            <img src={logomark} alt="" height={30}/>
            <span>HomeBudget</span>
        </NavLink>
        {
            userName && (
                <Form method="post" action="/logout" onSubmit={function(event) {
                    if(!confirm("Delete user and all data?")){
                        event.preventDefault()
                    }
                }}>
                    <button type="submit" className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={20}/>
                    </button>
                </Form>
            )
        }
    </nav>
  )
}

export default Nav
