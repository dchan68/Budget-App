import React from 'react'
import {useLoaderData} from "react-router-dom"
import { fetchData } from '../helpers'
import Table from '../components/Table'

export function expensesLoader(){
    const expenses = fetchData("expenses")
    return {expenses}
}

function ExpensesPage() {
    const {expenses} = useLoaderData()
  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {
        expenses && expenses.length > 9 
        ? (
            <div className="grid-md">
                <h2>Recent Expenses <small>{expenses.length} total</small></h2>
                <Table expenses={expenses}></Table>
            </div>
        ) 
        : <p>No expenses to show</p> 
      }
    </div>
  )
}

export default ExpensesPage
