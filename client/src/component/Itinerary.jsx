import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryActions';

import Activity from './Activity'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

class ItineraryList extends Component{

  
   
    async componentDidMount() {
      let cityId = this.props.match.params.cityId
       await this.props.getItineraries(cityId)
    }
    


    render(){
      // const { itineraries } = this.props.itineraries;

      

        return(

        <ListGroup>
            {this.props.itineraries.map((itinerary) => (
            <ListGroupItem> 
              {itinerary.title} 
              <Activity itineraryId = {itinerary._id}/>
            </ListGroupItem>
            
            ))}
        </ListGroup>

        );
    }
}

// ItineraryList.propTypes = {
//     getItineraries: PropTypes.func.isRequired,
//     itineraries: PropTypes.object.isRequired
// }


const mapStateToProps = (state) => {
 
  return {
    itineraries: state.itinerario.itineraries
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    getItineraries: (cityId)=>dispatch(getItineraries(cityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);