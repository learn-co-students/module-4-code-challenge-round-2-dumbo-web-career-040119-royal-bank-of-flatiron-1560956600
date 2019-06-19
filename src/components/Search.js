import React from 'react'
import { useFormState } from 'react-use-form-state';

const Search = (props) => {

  const [formState, {text}] = useFormState(null, {
  onChange(e, stateValues, nextStateValues) {

    props.handleChange(nextStateValues)
  }
});

  return (
    <div className="ui huge fluid icon input">
      <form>
      <input {...text('filter')} placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
      </form>
    </div>
  )
}

export default Search
