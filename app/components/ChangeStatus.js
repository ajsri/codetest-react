import React from 'react';

class ChangeStatus extends React.Component{
	constructor(props){
		super(props);
		this.state={
			editing: false,
			newStatus: ''
		}
	}
	editStatus(){
		this.setState({editing: !this.state.editing});
	}
	updateStatus(event){
		this.setState({editing: false});
		this.props.updateStatus(event.target.value, this.props.key);
	}
	render(){
		return(
			<div>
				{this.state.editing === true ? 
					<select className='form-control' onChange={this.updateStatus.bind(this)}>
						<option>Approved</option>
						<option>Pending</option>
						<option>Denied</option>
					</select>
					:
					<div onClick={this.editStatus.bind(this)}>{this.props.status}</div>
				}
			</div>
		)
	}
}

export default ChangeStatus;