import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {followingAction} from '../../actions/followingAction/'
class FollowingComponent extends React.Component{
  render(){
    const {following} = this.props.followingReducer
    if(!following.length){
      return <h1 className="styling-h1">LOADING FOLLOWING...</h1>
    }
    return(
        <ul>
          {following.map(
            (user, index) => {
              return(
                <li className="styling-li" key={index}><br />
                   <img className="user-info-avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                   <h2>{user.login} </h2><br /> <br /> <br />
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
)(FollowingComponent)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}