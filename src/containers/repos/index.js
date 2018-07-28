import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {reposAction} from '../../actions/reposAction'
import ReposComponent from '../../components/Repos'
class Repos extends React.Component{
  componentDidMount() {
    let username = this.props.match.params.username;
    this.props.dispatch(reposAction({}));
    this.props.dispatch(reposAction(username)) 
  }
  render(){
    const { repos } =this.props.reposReducer;
    return(
      <div className="repos-page">
        <h2>Repos of {this.props.match.username}</h2>
        <ReposComponent repos={repos} />
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
)(Repos)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}