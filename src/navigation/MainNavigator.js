import NewsFeed from '../components/NewsFeed'
import TwitterFeed from '../components/TwitterFeed'
import Profile from '../components/Profile'
import Banner from '../components/Banner'
import React, {Component} from 'react';

// navigation import
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer,
	} from 'react-navigation';

const routeConfiguration = {
	NewsFeed: { screen: NewsFeed },
  TwitterFeed: { screen: TwitterFeed },
  Profile: { screen: Profile }
}

const navRoutes = createBottomTabNavigator(routeConfiguration);


const AppContainer = createAppContainer(navRoutes);

export default AppContainer;