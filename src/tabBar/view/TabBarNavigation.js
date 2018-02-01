// React
import React, { Component } from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import  { TabBar }  from '../NavigationConfiguration'

//Redux
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const mapStateToProps = (state) => {  
  return { navigationState : state.tabId }
}

class TabBarNavigation extends Component {
  render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

TabBarNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(TabBarNavigation)
