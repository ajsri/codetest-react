import React from 'react';
import moment from 'moment';
import ChangeStatus from './ChangeStatus';

const Request = (props) => {
  if(!props){
    return(<div>Loading</div>)
  }
  else{
    return(
      <div className='row' key={props.key}>
        <div className='col-md-3'>
          {props.data.title}
        </div>
        <div className='col-md-2'>
          <ChangeStatus status={props.data.status} updateStatus={props.updateStatus} key={props.key}/>
        </div>
        <div className='col-md-2'>
          {moment(props.data.created_at).fromNow()}
        </div>
        <div className='col-md-2'>
          {moment(props.data.updated_at).fromNow()}
        </div>
        <div className='col-md-3'>
          Add Actions
        </div>
      </div>
    )
  }
}

export default Request;