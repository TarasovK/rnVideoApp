import React from 'react';
import { AppHome }  from '../AppHome';
import { render } from '@testing-library/react-native';

import renderer from 'react-test-renderer';

jest.mock('react-native-video', () => 'Video')

it('renders correctly', () => {
  const tree = renderer.create(<AppHome />);
  expect(tree).toMatchSnapshot()
});


it('contains navigation elements', async () => {
    const {findAllByText} = render(<AppHome />);

    // const itemAppHome = await findAllByText(/AppHome/)
    // expect(itemAppHome).toBeTruthy()

    const itemRec = await findAllByText(/Recommendations/)
    expect(itemRec).toBeTruthy()

    const itemSub = await findAllByText(/My Subscriptions/)
    expect(itemSub).toBeTruthy()

    const itemHome = await findAllByText(/Home/)
    expect(itemHome).toBeTruthy()

    const itemSearch = await findAllByText(/Search/)
    expect(itemSearch).toBeTruthy()

    const itemMsg = await findAllByText(/Messages/)
    expect(itemMsg).toBeTruthy()

    const itemProfile = await findAllByText(/Profile/)
    expect(itemProfile).toBeTruthy()
});