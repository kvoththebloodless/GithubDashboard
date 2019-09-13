import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'react-search-box'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class RepoSummary extends React.Component{
  data = [
        
  ]
    constructor(props)
    {
        super(props);
        this.state={isChecked:false
        ,index:0}
        this.populatedata = this.populatedata.bind(this);
        this.calcindex = this.calcindex.bind(this);
    }
    populatedata(orglist){
  
      let data1=[]
      console.log(orglist);
     if(orglist && orglist.length>0)
    
       for (let i=0;i<orglist.length;i++)
       { 
        data1.push({key:orglist[i].id+"",value:orglist[i].name})
         
       }
     this.data=data1;
     
     }
     calcindex(value){
      {
      for (let i=0;i<this.props.repolist.length;i++)
      { 
       if(value==this.props.repolist[i].name)
       
        this.setState({index:i})}
      }
    }
    render(){
     
      if(this.props.repolist){
       
        this.populatedata(this.props.repolist);
      }
      console.log("inbetween"+this.props.repolist)
        defaults.global.animation.duration=5000;
     
      
  return(
    <div className="reposummary"> 
   Switch to Tabular view? <Switch 
        checked={this.state.isChecked}
        onChange={(e)=>{this.setState({isChecked:!this.state.isChecked})}}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        {this.state.isChecked? <Paper className="root">
      <Table className="table" size="small">
        <TableHead>
          <TableRow>
           
            <TableCell>Repository</TableCell>
            <TableCell align="right">Clones on <br></br> Enterprise Machines</TableCell>
            <TableCell align="right">Clones on <br></br>Public Machines</TableCell>
            <TableCell align="right">Total Clones</TableCell>
            <TableCell align="right">Private?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.repolist.map(row => (
            <TableRow key={row}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.clone_on_enterprise}</TableCell>
              <TableCell align="right">{row.clone_on_public}</TableCell>
              <TableCell align="right">{row.clone_count}</TableCell>
              <TableCell align="right">{row.private+""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>:(
    
    <Card >
      <div>
      { (this.props.repolist)?(
        
        <div>
        <a href={this.props.repolist[this.state.index].html_url}>
          <img src="https://img.icons8.com/material-rounded/48/d3d3d3/external-link.png" className="goright" width="10%" height="10%"/>  
          </a>
{    this.props.repolist[this.state.index].private?     
<img src="https://img.icons8.com/ios-glyphs/60/000000/private2.png" height="10%" width="10%" className="goleft"/>
:<br></br>}
<br></br>
    
          <Doughnut data={{labels:["Private","Public"],
          datasets:[{data:[this.props.repolist[this.state.index].clone_on_enterprise,this.props.repolist[this.state.index].clone_on_public],
           backgroundColor:['red','blue']}]}} ></Doughnut> 
   
            <br></br>
      <Typography variant="h6" >
        Clone Count
            
      </Typography>
     
            
            <div >  {this.props.repolist[this.state.index].name}</div>
            <br></br>
            
            <SearchBar 
             placeholder="Search for Repository"
        value="Doe"
        data={this.data}
        onSelect={record => this.calcindex(record.value)}
        
     />
     </div>
     )
     :<div>N/A</div>
          }
     
     </div>
      </Card>)
          
          }
        
      </div>

  )
    }
}