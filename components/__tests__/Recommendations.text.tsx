import 'react-native';
import React from 'react';
import { Recomendations }  from '../Recomendations';

import renderer from 'react-test-renderer';

jest.mock('react-native-video', () => 'Video')

it('renders correctly', () => {
  const tree = renderer.create(<Recomendations />);
  expect(tree).toMatchSnapshot()
});