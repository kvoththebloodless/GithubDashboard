import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import './App.css';

 class NameCard extends React.Component{
   constructor(props)
   {
       super(props)
       this.state={namecard:{name:'Gourav',description:'Here is a very very long description'}}
   }
    render(){
          
        return(
            <Card className="namecontainer">
              <div className="linkit">
             <a href={this.props.carddetails?this.props.carddetails.url?this.props.carddetails.url:"":""}> 
              <img src="https://img.icons8.com/material-rounded/48/d3d3d3/external-link.png"/>
              </a>
              </div>
              
            {/* <ExampleComponent
            image="https://avatars0.githubusercontent.com/u/3043?v=4"
            roundedColor="#ffffff"
            imageWidth="100%"
            imageHeight="100%"
            roundedSize="13"
            ></ExampleComponent> */}
            
            <img src= {this.props.carddetails?this.props.carddetails.avatar_url?this.props.carddetails.avatar_url:"https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png":"https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png"}alt="Organization image" className="rounded"/>
            
         <Typography variant="h6" >
         {this.props.carddetails?this.props.carddetails.name?this.props.carddetails.name:"default":"default"}
            
      </Typography>
     
       
            <div className="description">   {this.props.carddetails?this.props.carddetails.description?this.props.carddetails.description:"default":"default"}</div>
      
      <div className="info">
      <img src="https://img.icons8.com/ios-glyphs/50/000000/following.png" /> {this.props.carddetails?this.props.carddetails.followers?this.props.carddetails.followers:"default":"default"}
        <img src="https://img.icons8.com/ios-filled/50/d3d3d3/conference-call.png"/> {this.props.carddetails?this.props.carddetails.collaborators?this.props.carddetails.collaborators:"default":"default"}
        
      </div>
       
            
            </Card>
        )
    }
}

  
  export default NameCard;