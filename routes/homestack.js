import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Pokemon from "../pages/Pokemon";
import PokemonDetails from "../pages/PokemonDetails";
import Search from '../pages/Search';
import Types from '../pages/Types';
import Home from '../pages/home';
import Credit from '../pages/credits';

const screens = {
// Provides navigation through each of the screens in the app adding them to the
// stack
    Search: {
        screen: Search
    },
    Types: {
        screen: Types
    },
    Pokemon: {
        screen: Pokemon
    },
    PokemonDetails: {
        screen: PokemonDetails
    },
    Credit: {
        screen: Credit
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
