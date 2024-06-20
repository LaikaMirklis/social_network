import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './FormsControls.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FormsControl = ({ input, meta, children, ...props }) => {
  const hasError = meta.touched && meta.error;
  const [visibility, setVisibility] = useState(false);

  const handleMouseOver = () => {
    setVisibility(true);
  };

  const handleMouseOut = () => {
    setVisibility(false);
  };

  return (
    <div className={`${styles.formControl} ${hasError && styles.error}`}>
      {children}
      {hasError && (
        <div className={styles.errorMessage}>
          {visibility && <span>{meta.error}</span>}
          <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </button>
        </div>
      )}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restProps} />
    </FormsControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <input {...input} {...restProps} />
    </FormsControl>
  );
};
