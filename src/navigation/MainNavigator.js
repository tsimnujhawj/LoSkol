import Feed from '../components/Feed'
import Post from '../components/Post'
import Profile from '../components/Profile'
import Settings from '../components/Settings'

// navigation import
import {
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation';

const routeConfiguration = {
	Feed: { screen: Feed },
	Post: { screen: Post },
	Profile: { screen: Profile },
	Settings: { screen: Settings }
}

const navRoutes = createBottomTabNavigator(routeConfiguration);


const AppContainer = createAppContainer(navRoutes);

export default AppContainer;