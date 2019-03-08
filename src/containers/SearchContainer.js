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


export default SearchContainer;
