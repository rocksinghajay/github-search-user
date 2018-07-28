import React from 'react';
class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:''
    }
  }
  handleChane(e){
    this.setState({  username:e.target.value })
  }
  handleSubmit(e){
    e.preventDefault();
    let username=this.state.username;
    this.props.history.push(`/userlist/${username}`)
  }
  render() {
    return(
      <div className="search-page">
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit.bind(this)} className="form-styling ">
              <div className="form-content">
                <h2>Enter A GitHub Username</h2>
                  <div className="form-group mx-sm-3 mb-2">
                    <input type="text" required className="form-control" value={this.state.username}  placeholder="Type username" onChange={this.handleChane.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">Search</button>
              </div>
            </form>
          </div>  
        </div>
      </div>
      );
  }
};
export default Search;