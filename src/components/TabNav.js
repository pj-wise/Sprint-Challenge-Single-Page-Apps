import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/

const Nav = (props) => <NavLink exact {...props} activeClassName='active' />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel('home', 'Home Page');
const characterLabel = createLabel('users', 'Characters');
const locationLabel = createLabel('map', 'Locations');
const episodeLabel = createLabel('video', 'Episodes');

const panes = [
  {
    menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} />,
  },
  {
    menuItem: (
      <Menu.Item
        key='chars'
        as={Nav}
        to={`/characters`}
        content={characterLabel}
      />
    ),
  },
  {
    menuItem: (
      <Menu.Item key='loc' as={Nav} to={`/locations`} content={locationLabel} />
    ),
  },
  {
    menuItem: (
      <Menu.Item key='epi' as={Nav} to={`/episodes`} content={episodeLabel} />
    ),
  },
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
