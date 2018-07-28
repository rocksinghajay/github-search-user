import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userlistAction} from '../../actions/userlistAction/';
import UserlistComponent from '../../components/Userlist'
class Userlist extends React.Component {
  componentDidMount(){
    this.props.dispatch(userlistAction([]))
		let username =this.props.match.params.username
		this.props.dispatch(userlistAction(username))
  }
  render() {
    let userlist = this.props.userlistReducer.userList
    return(
      <UserlistComponent userlist={userlist}/>
      );
  } 
}
export default connect(
state => (
  {
   
  },
  mapDispatch
)
)(Userlist)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}