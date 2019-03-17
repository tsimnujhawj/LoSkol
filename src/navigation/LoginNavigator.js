import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

// navigation import
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

const routeConfiguration = {
    Login: { screen: LoginForm },
    Register: { screen: RegisterForm },
}

const navRoutes = createStackNavigator(routeConfiguration);


const AppContainer = createAppContainer(navRoutes);

export default AppContainer;