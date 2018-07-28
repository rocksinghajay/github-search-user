import React from 'react';
import {connect} from 'react-redux';
import {followersAction} from '../../actions/followersAction';
import FollowersComponent from '../../components/Followers';
class Followers extends React.Component{
  componentDidMount(){
    let username = this.props.match.params.username;
    this.props.dispatch(followersAction({}));
    this.props.dispatch(followersAction(username))
  }
  render(){
    const {followers} = this.props.followersReducer;
    return(
      <div className="followers-page">
        <h2>Followers of {this.props.match.params.username}</h2><br /><br />
        <FollowersComponent followers={followers} />
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
)(Followers)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}