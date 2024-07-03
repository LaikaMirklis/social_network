import './BearFormContainer.css';
import formBear from '../../../assets/images/form-bear.svg';
import formBearLimbs from '../../../assets/images/form-bear-limbs.svg';
import formBearHand from '../../../assets/images/form-bear-hand.svg';
import formBearLeg from '../../../assets/images/form-bear-leg.svg';
import MovingEyes from './MovingEyes';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BearFormContainer = ({ Component, styles }) => {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className={`bearWrapper ${styles.bearWrapper}`}>
            <MovingEyes eyesClassName={styles.bearEyes} />
            <img src={formBear} className={`bear ${styles.bear}`} alt='form bear' />
            <img src={formBearLimbs} className={`bearLimbs ${styles.bearLimbs}`} alt='form bear' />
            <img src={formBearLeg} className={`bearLimbs ${styles.bearLimbs} ${isHidden && 'hidden'}`} alt='form bear' />
            {/* For valid form animation */}
            {/* <img src={formBearHand} className={`bearHand ${styles.bearHand}`} alt='form bear' /> */}

            <Component setIsHidden={setIsHidden} />
        </div>
    );
};

BearFormContainer.propTypes = {
    Component: PropTypes.func.isRequired,
    styles: PropTypes.object.isRequired,
};

export default BearFormContainer