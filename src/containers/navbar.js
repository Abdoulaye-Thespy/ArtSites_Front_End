import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NavBar = () => (
  <>
    <h1>razak</h1>
    <section>
      <ul>
        <li><i className="fas fa-bars">ii</i></li>
        <li>Art/Culture...</li>
        <li><i className="fas fa-search">ii</i></li>
      </ul>
    </section>
  </>

);

NavBar.propTypes = {
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
