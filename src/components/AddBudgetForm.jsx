import { Form, useFetcher } from "react-router-dom"

// library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useRef, useEffect } from "react"

function AddBudgetForm() {
    const fetcher =  useFetcher()
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef();
    const focusRef = useRef();

    //this function will reset the form so it's empty again upon submission
    useEffect(function(){
       if(!isSubmitting) {
        formRef.current.reset()
        focusRef.current.focus()
       }
    }, [isSubmitting])

  return (
<div className="form-wrapper">
      <h2 className="h3">
        Create budget
      </h2>
      <fetcher.Form 
        method="post"
        className="grid-sm"
        ref={formRef} //when form is submitted, form will reset and empty out the fields
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef} //once form is submitted, this input is automatically focused on again for inputting
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
            {
                isSubmitting ? <span>Submitting...</span> 
                : (
                    <>
                        <span>Create Budget</span>
                        <CurrencyDollarIcon width={20} />
                    </>
                )
            }   
        </button>
      </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm;
