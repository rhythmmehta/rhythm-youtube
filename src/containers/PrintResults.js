import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as searchActions from '../store/Search/actions';

export class PrintResults extends React.Component{
    static propTypes = {
        results: PropTypes.object.isRequired,
        searchActions: PropTypes.object.isRequired
    };
    constructor(props){
        super(props);
        this.addFavs=this.addFavs.bind(this);

    }

addFavs(items){
this.props.searchActions.addFavorites(items);
console.log("hello")
}

render(){
    let results=this.props.results.items;
    let details;
       if(results) {
           details = results.map((item,index)=>{
             return (<div key={index} className="SearchResults">    <p><b>Title:</b>{item.snippet.title}</p>
   <p><b>Channel Name:</b>{item.snippet.channelTitle}</p>
   <p><b>Thumbnail:</b><img src={item.snippet.thumbnails.high.url} height="100" width="120"/></p>
 <button name="favorites" onClick={(evt)=>this.addFavs(item)}>Add to Favorites</button>
   </div>) });        }
        return(<div>
            {details}
            </div>
        )
    }
}

export default connect(
    state=>({
search: state.search
    }),
    dispatch => ({
        searchActions:  bindActionCreators(searchActions, dispatch)

    })
)(PrintResults);
