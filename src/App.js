import React from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar'
import './App.css';
import NameCard from './NameCard'
import RepoSummary from './RepoSummary'
import Typography from '@material-ui/core/Typography';
import OrgSummary from './OrgSummary';
export default class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state = { searched:false};
    this.searchselectcallback = this.searchselectcallback.bind(this);
  }
  componentDidMount()
  {
    fetch('http://demo8899147.mockable.io/organizations')
  .then(function(response) {
    return response.json();
  })
  .then((myJson)=> {
  this.setState({orglist:myJson})

  //Todo: make repos call


  })
  }

  searchselectcallback(org)
  { 

    //Todo: make repos call 
    console.log(org)
    fetch(org.repos_url)
    .then(function(response) {
      return response.json();
    })
    .then((myJson)=> {
     
    this.setState({repolist:myJson})})
    //namecard
    this.setState({namecarddetails:
      {name:org.login,
       description: org.description,
       collaborators:org.collaborators,
       followers:org.followers,
       url:org.url,
       avatar_url:org.avatar_url
      }
    
      
    });
    //OrgSummary
    this.setState({orgsumdetails:
      {private:org.total_private_repos,
       public:org.public_repos 
      }
    });
    //RepoSummary
    this.setState({repolist:
     this.state.repolist    
      
  });
  this.setState({searched:true})

 
  }
  render(){
    const searched=this.state.searched;
    return (
    <div className="App App-Box-Model " >
      <div className="title" >
    
      <Typography variant="h6" >
            CloneDash
          </Typography>
      
      </div>
      <SearchBar orglist={this.state.orglist} searchselectcallback={this.searchselectcallback}/>

       {!searched?
      (<div className="Aligncenterself"><img height="40%" width="40%"  src={require('./Assets/searchforsomething.gif')} alt="Search for an Organization to display results!" />
      
      <div className="App-link">Search for results.</div>
      </div>):(
        <div className="AlignRowContainer ">
        <NameCard carddetails={this.state.namecarddetails}/>
        <div className="AlignRowContainer extraforright">
        <OrgSummary type="private" orgdetails={this.state.orgsumdetails}/>
        <OrgSummary type="public" orgdetails={this.state.orgsumdetails} />
        <RepoSummary repolist={this.state.repolist}/>
      
        </div>
          </div>
      )
      }
     
      
    </div>
  );
      }
}

