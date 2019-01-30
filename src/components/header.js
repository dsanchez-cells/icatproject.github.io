import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: false
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch(e) {
    e.preventDefault();
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  render() {
    return (
      <header
        css={css`
          background: black;
          display: inline-block;
          width: 100%;
          position: fixed;
          z-index: 5;
          height: 2.5rem;
          @media only screen and (max-width: 600px) {
            position: absolute;
          }
        `}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            css={css`
              margin: 0 1rem;
              color: white;
              float: left;
              text-decoration: none;
            `}
          >
            {this.props.siteTitle}
          </Link>
        </h1>
        <div
          css={css`
            background-color: #24890d;
            float: right;
            &:hover {
              background-color: #41a62a;
            }
            @media only screen and (max-width: 600px) {
              margin-right: 0;
            }
          `}
        >
          <a
            css={css`
              display: inline-block;
              text-align: center;
              color: white;
              line-height: 2.5rem;
              width: 2.5rem;
            `}
            href="#search-toggle"
            onClick={this.toggleSearch}
          >
            <FontAwesomeIcon icon="search" title="Search" />
          </a>
        </div>
        <Navbar />

        {this.state.searchVisible ? (
          <div
            css={css`
              position: absolute;
              top: 2.5em;
              left: 185px;
              right: 0;
              background-color: #41a62a;
              @media only screen and (max-width: 600px) {
                left: 0;
              }
            `}
          >
            <div
              css={css`
                @media only screen and (min-width: 600px) {
                  float: right;
                }
                padding: 0.5rem 1rem;
              `}
            >
              <Searchbar
                inputCSS={css`
                  width: 350px;
                  @media only screen and (max-width: 600px) {
                    width: 100%;
                  }
                `}
              />
            </div>
          </div>
        ) : null}
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;