import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Main, Social } from '../..';
import Footer from '../Footer';

const storyTitle = {
  title: 'Resume Components | Page Sections',
};

const socialData: Social[] = [
  {
    name: 'facebook',
    url: 'http://facebook.com/tim.baker.906',
    className: 'fa fa-facebook',
  },
  {
    name: 'twitter',
    url: 'http://twitter.com',
    className: 'fa fa-twitter',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tim-baker-8420009a/',
    className: 'fa fa-linkedin',
  },
  {
    name: 'instagram',
    url: 'http://instagram.com/tbaker_x',
    className: 'fa fa-instagram',
  },
  {
    name: 'github',
    url: 'http://github.com/tbakerx',
    className: 'fa fa-github',
  },
];

const footerProps: Main = {
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
  social: socialData,
};
storiesOf(storyTitle.title, module)
  .addDecorator(withKnobs)
  .add('Footer', () => {
    const { ...props } = footerProps;
    return <Footer {...props} />;
  });
