import React from 'react'

const Filter = (props) => {
  if(!props){
    return (
      <div>Loading</div>
    )
  }
  else{
    return(
      <div className='row'>
        <div className='col-md-12'>
          <select className='form-control' onChange={props.onChange}>
            {props.options.map((option, i) => {
              return (<option key={i}>{option}</option>)
            })}
          </select>
        </div>
      </div>
    )   
  }

}

export default Filter;