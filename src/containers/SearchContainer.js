import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

var mapDispatchToProps = (dispatch) => {
    return {
        handleSearchInputChange: (q) => {
            dispatch(handleVideoSearch(q))
        }
    }
}

var mapStateToProps = (store) => (
    {videos: store.videoList,
     video : store.currentVideo}
)

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
