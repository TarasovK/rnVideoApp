import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from '../VideoPlayer';

jest.mock('react-native-video', () => 'Video');

describe('VideoPlayer', () => {
  const uri =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  it('renders video correctly', () => {
    const component = renderer
      .create(<VideoPlayer uri={uri}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});