import React from 'react';
import {connect} from 'react-redux';
import {followersAction} from '../../actions/followersAction/';
class FollowersComponent extends React.Component{
  render(){
    const {followers} = this.props.followersReducer;
    if (!followers.length){
      return <h1 className="styling-h1">LOADING FOLLOWERS...</h1>
    }
    return(
        <ul>
          {followers.map(
            (user, index) =>{
              return(
                <li className="styling-li" key={index}>
                  <img className="user-info-avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                  <h2>{user.login} </h2>
                </li>
              )
            }
            )}
        </ul>
      )
  }
} 
export default connect(
state => (
  {
   
  },
  mapDispatch
)
)(FollowersComponent)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}