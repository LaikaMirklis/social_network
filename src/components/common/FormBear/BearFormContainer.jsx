import './BearFormContainer.css';
import formBear from '../../../assets/images/form-bear.svg';
import formBearLimbs from '../../../assets/images/form-bear-limbs.svg';
import formBearHand from '../../../assets/images/form-bear-hand.svg';
import MovingEyes from './MovingEyes';

const BearFormContainer = ({ children, styles }) => {
    return (
        <div className={`bearWrapper ${styles.bearWrapper}`}>
            <MovingEyes eyesClassName={styles.bearEyes} />
            <img src={formBear} className={`bear ${styles.bear}`} alt='form bear' />
            <img src={formBearLimbs} className={`bearLimbs ${styles.bearLimbs}`} alt='form bear' />
            <img src={formBearHand} className={`bearHand ${styles.bearHand}`} alt='form bear' />

            {children}
        </div>
    );
};

export default BearFormContainer