import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import About from '../About';
import { Main } from '../..';

const storyTitle = {
  title: 'Resume Components | Page Sections',
};

const aboutProps: Main = {
  name: 'Wouter Langerman',
  occupation: 'Software Developer D2',
  description:
    'Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer',
  image: 'profilepic.jpg',
  bio: 'Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.',
  contactmessage: 'Here is where you should write your message to readers to have them get in contact with you.',
  email: 'WouterObs@gmail.com',
  phone: '079 391 2573',
  address: {
    street: '35 Arum Road',
    city: 'Cape Town',
    state: 'Western Province',
    zip: '7441',
  },
};
storiesOf(storyTitle.title, module)
  .addDecorator(withKnobs)
  .add('About', () => {
    const { ...props } = aboutProps;
    return <About {...props} />;
  });
