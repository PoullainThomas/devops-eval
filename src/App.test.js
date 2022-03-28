import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains(/Learn React/i);
});

it('count initialized with 0', () => {
  mount(<App />);
  cy.get('[data-cy="count"]').contains('0');
})
it('button click increase count by 1', () => {
  mount(<App />);
  cy.get('[data-cy="button"]').click();
  cy.get('[data-cy="count"]').contains('1');
})
