import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createSwitchNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
    })
);
