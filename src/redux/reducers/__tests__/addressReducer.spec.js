import addressReducer from '../addressReducer';
import * as types from '../../actions/types';

describe('customer address actions', () => {
  const data = {
    addresses: [
      {
        user: 1,
        name: 'Baker Sekitoleko',
        address: 'Najjanankumbi, Entebbe road',
        city: 'Kampala',
        state: 'Kampala',
        zip: '00256'
      },
      {
        user: 2,
        name: 'Henry Bulemi',
        address: 'Bukoto, Kira road',
        city: 'Kampala',
        state: 'Kampala',
        zip: '00256'
      }
    ]
  };
  const initialState = {
    addresses: []
  };

  test('ADD_ADDRESS action', () => {
    const action = {
      type: types.ADD_ADDRESS,
      payload: data
    };
    expect(addressReducer(initialState, action)).toMatchObject({
      addresses: data
    });
  });

  test('No action taken', () => {
    expect(addressReducer(initialState, {})).toMatchObject({
      addresses: []
    });
  });
});
