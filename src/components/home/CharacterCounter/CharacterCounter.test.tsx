import React from 'react';
import { shallow } from 'enzyme';
import CharacterCounter from './CharacterCounter';

describe('Char Counters', () => {
  const counters = [
    {
      total: 71,
      text: "Total L's"
    },
    {
      total: 73,
      text: "Total E's"
    },
    {
      total: 345,
      text: "Total C's"
    },
    {
      total: 2.5,
      text: 'Total time',
      suffix: 's'
    }
  ];

  test('It should render', () => {
    shallow(<CharacterCounter counters={counters} />);
  });

  test('Counters should be displayed', () => {
    const wrapper = shallow(<CharacterCounter counters={counters} />);

    counters.forEach((counter, index) => {
      const element = wrapper.find({ 'data-testid': `char-counter-${index}` });
      expect(element.length).toEqual(1);
    });
  });
});
