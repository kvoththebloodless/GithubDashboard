import React from 'react';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import './App.css';
import CountUp from 'react-countup';
import Typography from '@material-ui/core/Typography';

export default class OrgSummary extends React.Component{
render(){
  console.log("konivhiws  "+this.props.orgdetails.private)
    return(
        <Zoom in={true} className="papercontainer">
        <Paper elevation={3} >
        
       <div className="numbercounter">
        <CountUp  start={0} end={this.props.type=='private'?this.props.orgdetails.private:this.props.orgdetails.public} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
</div>
        
        <Typography variant="body2" component="p" className="typeofrepo">
        {this.props.type=="private"?"Private Repositories":"Public open source repositories"}
         
          
        </Typography>
        </Paper>
      </Zoom>
    )
}
}