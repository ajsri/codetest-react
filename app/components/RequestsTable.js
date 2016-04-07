import React from 'react';
import Request from './Request';

const RequestsTable = (props) => {
	if(!props){
		return (
			<div>Loading</div>
		)
	}
	else{
		return(
			<div>
				{props.requests.map((record, i) => {
					if(record.status == props.filter || props.filter == 'All'){
						return(
							<Request key={i} data={record} updateStatus={props.updateStatus}/>
						)
					}
					else return
				})}
			</div>
		)
	}
}

export default RequestsTable;