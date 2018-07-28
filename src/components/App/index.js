import React from 'react';
import { Route} from 'react-router-dom';
import Search from '../Search';
import Header from '../Header';
import Userlist from '../../containers/userlist/'
import User from '../../containers/user/'
import Followers from '../../containers/followers/'
import Repos from '../../containers/repos/'
import Following from '../../containers/following/'
class App extends React.Component {
  render() {
    return (
      <div>
        <header> 
          <Header />
        </header>
        <main>
          <Route exact path="/" component={Search} />
          <Route path="/userlist/:username" component={Userlist} />
          <Route path="/user/:username" component={User} />
          <Route path="/user/:username/followers" component={Followers}/>
          <Route path="/user/:username/repos" component={Repos}/>
          <Route path="/user/:username/following" component={Following}/>
        </main>
      </div>
    );
  }
}
export default App;