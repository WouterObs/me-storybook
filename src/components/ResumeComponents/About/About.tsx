import React, { Component, ReactElement } from 'react';
import { Main } from '../index.d';
import { Row, Section } from './Styled/About.styled';
import '../../../../public/css/default.css';
import '../../../../public/css/layout.css';

/**
 *
 *
 * @export
 * @class About
 * @extends {Component<Main>}
 */
export default class About extends Component<Main> {
  render(): ReactElement {
    const { name, image, bio, address, phone, email, resumedownload } =
      this.props;
    const { street, city, state, zip } = address;
    const profilepic = 'images/' + image;
    return (
      <Section id="about">
        <Row className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Section>
    );
  }
}
