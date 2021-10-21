import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render } from '@testing-library/react';

import { App } from '../../App';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';

describe('App component', () => {
  let appWrapper: ShallowWrapper;
  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('should render', () => {
    expect(appWrapper).toBeTruthy();
  });

  it('should have a title', () => {
    const titleElement = appWrapper.find('h1');

    expect(titleElement.length).toBe(1);
  });

  it('should have a TodoForm component', () => {
    const todoFormComponent = appWrapper.find(TodoForm);

    expect(todoFormComponent.length).toBe(1);
  });

  it('should have a TodoList component', () => {
    const todoListComponent = appWrapper.find(TodoList);

    expect(todoListComponent.length).toBe(1);
  });
});
