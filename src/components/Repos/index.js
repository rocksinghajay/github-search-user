import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {reposAction} from '../../actions/reposAction'
class ReposComponent extends React.Component{
  render(){
    const { repos } =this.props.reposReducer;
    if (!repos.length) {
      return <h1 className="styling-h1">LOADING PUBLIC REPOS...</h1>
    }
    return(
        <ul>
          {repos.map(
            (user, index) => {
              return (
                <li  key={index} className="styling-li">
                  <Link to="" onClick={() => window.open(user.html_url)}>
                    <h2> {user.full_name} </h2>
                  </Link>
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
)(ReposComponent)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}