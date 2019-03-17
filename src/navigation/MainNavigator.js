import NewsFeed from '../components/NewsFeed'
import TwitterFeed from '../components/TwitterFeed'
import Profile from '../components/Profile'
import Settings from '../components/Settings'

// navigation import
import {
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation';

const routeConfiguration = {
	NewsFeed: { screen: NewsFeed },
	TwitterFeed: { screen: TwitterFeed },
	Profile: { screen: Profile },
	Settings: { screen: Settings }
}

const navRoutes = createBottomTabNavigator(routeConfiguration);


const AppContainer = createAppContainer(navRoutes);

export default AppContainer;