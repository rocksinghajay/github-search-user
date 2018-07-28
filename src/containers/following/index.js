import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {followingAction} from '../../actions/followingAction/'
import FollowingComponent from '../../components/Following'
class Following extends React.Component{
  componentDidMount(){
    let username = this.props.match.params.username
    this.props.dispatch(followingAction({}));
    this.props.dispatch(followingAction(username))
  }
  render(){
    const {following} = this.props.followingReducer
    return(
      <div className="following-page">
        <h2>Following of {this.props.match.params.username}</h2>
        <FollowingComponent following={following} />
      </div>
      ) 
  }
} 
export default connect(
state => (
  {
   
  },
  mapDispatch
)
)(Following)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}