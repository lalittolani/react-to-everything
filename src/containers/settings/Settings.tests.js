import { describe, it } from 'mocha';
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import Settings from './Settings';

describe('Settings', () => {
  describe('Desktop', () => {
    it('Component is rendered', () => {
      expect(mount(<App />).find('.main').length).to.equal(1);
    });
  });
});
