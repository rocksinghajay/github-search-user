import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {userAction} from '../../actions/userAction/';
class User extends React.Component {
    componentDidMount() {
      this.props.dispatch(userAction({}))
		  let username =this.props.match.params.username
		  this.props.dispatch(userAction(username))
    }
    userDetails(data) {
      return (
        <li key={data.name} className="user-info-data">
          <Link to={data.url}>
            <p>{data.value}</p>
            <p>{data.name}</p>
          </Link>
        </li>
        );
    }
    render() {
      const { user} = this.props.userReducer;
        if (!user) {
          return (<div className="user-page">LOADING...</div>);
        }
        const data = [
          {
            name: 'Public Repos',
            value: user.public_repos,
            url: `/user/${this.props.match.params.username}/repos`
          },
          {
            name: 'Followers',
            value: user.followers,
            url: `/user/${this.props.match.params.username}/followers`
          },
          {
            name: 'Following',
            value: user.following,
            url: `/user/${this.props.match.params.username}/following`
          }
          ];
          return (
            <div className=" container">
                <div className="user-info">
                  <h3 className="styling-h3" onClick={() => window.open(user.html_url)}>Go to github</h3><br /><br/>
                        <img className="user-info-avatar-1" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2>{user.login} @{user.name}</h2><br />
                        <h4>{user.bio}</h4><br />
                        <h4>LOCATION: {user.location}</h4><br />
                        <p>BLOG: {user.blog}</p><br />
                    <ul className="user-info-data">
                        {data.map(this.userDetails.bind(this))}
                    </ul>
                </div>
                <hr style={{ borderTop: '2px solid blue'}}/>
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
)(User)

const mapDispatch = dispatch => {
const allActionProps = Object.assign({}, dispatch)
return allActionProps
}