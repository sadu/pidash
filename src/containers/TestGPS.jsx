import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TestGPS({ location, speed, buffer }) {
    return (
        <div className="PiDash-TestGPS">
            At [{location.lat}, {location.lon}], going {speed} Kmph.
            <pre>buffer length: {buffer.length}</pre>
        </div>
    );
}

TestGPS.propTypes = {
    location: PropTypes.object.isRequired,
    speed: PropTypes.number.isRequired,
    buffer: PropTypes.array.isRequired,
};

const mapStateToProps = state => state.gps;

export default connect(mapStateToProps)(TestGPS);
