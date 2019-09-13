import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'react-search-box'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import Card from '@material-ui/core/Card';
import './App.css';




 class TopHeader extends React.Component {
  
  sendorg(value){
    {console.log("heyyy"+value)
    for (let i=0;i<this.props.orglist.length;i++)
    { 
     if(value==this.props.orglist[i].login)
     
       return this.props.orglist[i];}
    }
  }
  populatedata(orglist){
   console.log(orglist);
  if(this.data.length<=0)
  { if(orglist && orglist.length>0)
 
    for (let i=0;i<orglist.length;i++)
    { 
     this.data.push({key:orglist[i].id+"",value:orglist[i].login})
      console.log(this.data)
    }
  }
  }
  //TODO: Update data with data from REST API.
  data = [
  ]
  constructor(props) {
    super(props);
    this.populatedata = this.populatedata.bind(this);
    this.sendorg = this.sendorg.bind(this);
  }

  render(){ 
   
    this.populatedata(this.props.orglist);
    return (
 <div className='container'> 

    <div className='searchbar'>
    <SearchBar  placeholder="Search for Organizations"
        value="Doe"
        data={this.data}
        onSelect={record =>{this.props.searchselectcallback (this.sendorg(record.value))}}
     
      >

</SearchBar>
    </div>
    </div> 
  );
}
}



export default TopHeader;