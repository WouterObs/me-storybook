import React, { Component, ReactElement } from 'react';
import { Main } from '..';

class Footer extends Component<Main> {
  render(): ReactElement {
    const { social } = this.props;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {social && social.length > 0
                ? social.map(network => {
                    return (
                      <li key={network.name}>
                        <a href={network.url}>
                          <i className={network.className}></i>
                        </a>
                      </li>
                    );
                  })
                : undefined}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 WouterObs</li>
              <li>
                Design by{' '}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
