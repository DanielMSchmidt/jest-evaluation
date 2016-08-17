import React from 'react';
import renderer from 'react-test-renderer';

import Accordion from '../src/components/Accordion';

describe('Accordion', () => {
  it('renders the additional content on hover', () => {
    const component = renderer.create(
      <Accordion activeIndex={1} headlines={['Foo', 'Bar', 'Baz']} content={['Foo Content', 'Bar content', 'Baz content']} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
