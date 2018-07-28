import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userlistAction} from '../../actions/userlistAction/'
class UserlistComponent extends React.Component {
  render() {
    let userlist = this.props.userlist
    return (
    	<div>
        <ul>
          {
            userlist.map((userList, index) =>{
              return(
                <Link to={`/user/${userList.login}`} key={index}>
                  <li  className="userlist">
                    <h3>{userList.login}</h3>
                    <img className="user-info-avatar" src={userList.avatar_url} alt={`${userList.login} avatar`}/>
                  </li>
                </Link>
                )
            }
            )
          }
        </ul>    		
      </div>
    );
  }
}
export default connect(
state => (
  {
   
  },
  mapDispatch
)
)(UserlistComponent)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}