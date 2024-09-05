import './BearFormContainer.css';
import formBear from '../../../assets/images/form-bear.svg';
import formBearLimbs from '../../../assets/images/form-bear-limbs.svg';
import formBearHand from '../../../assets/images/form-bear-hand.svg';
import formBearLeg from '../../../assets/images/form-bear-leg.svg';
import MovingEyes from './MovingEyes';
import PropTypes from 'prop-types';

const BearFormContainer = ({ styles, isLegHidden, Component }) => (
    <div className={`bearWrapper ${styles.bearWrapper}`}>
        <MovingEyes eyesClassName={styles.bearEyes} />
        <img src={formBear} className={`bear ${styles.bear}`} alt='form bear' />
        <img src={formBearLimbs} className={`bearLimbs ${styles.bearLimbs}`} alt='form bear' />
        <img src={formBearLeg} className={`bearLimbs ${styles.bearLimbs} ${isLegHidden && 'hidden'}`} alt='form bear' />
        {/* For valid form animation */}
        {/* <img src={formBearHand} className={`bearHand ${styles.bearHand}`} alt='form bear' /> */}

        <Component />
    </div>
)

BearFormContainer.propTypes = {
    styles: PropTypes.object.isRequired,
    isLegHidden: PropTypes.bool.isRequired,
    Component: PropTypes.func.isRequired
};

export default BearFormContainer;