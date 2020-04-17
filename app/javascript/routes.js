import React from 'react';
import HomeScreen from './screens/home';
import DiscoveryScreen from "./screens/discovery";
import SearchScreen from "./screens/search";
import AlbumScreen from "./screens/album";
import FavoritesScreen from "./screens/favorite";
 

import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/discovery' component={DiscoveryScreen} />
            <Route exact path='/search' component={SearchScreen} />
            <Route exact path='/album/:id' component={AlbumScreen} />
            <Route exact path='/favorites' component={FavoritesScreen} />
        </Switch>
  );
}
