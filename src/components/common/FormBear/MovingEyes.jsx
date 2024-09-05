import React, { useState, useEffect, useRef } from 'react';
import './MovingEyes.css';

const MovingEyes = ({ eyesClassName }) => {
    const eye = useRef(null);
    const leftPupil = useRef(null);
    const rightPupil = useRef(null);
    const [leftPupilTransform, setLeftPupilTransform] = useState('translate(0, 0)');
    const [rightPupilTransform, setRightPupilTransform] = useState('translate(0, 0)');

    let calculatePosition = (ref, e, setState) => {
        const pupilRect = ref.current.getBoundingClientRect();
        const eyeRect = eye.current.getBoundingClientRect();

        const offsetX = e.pageX - pupilRect.left;
        const offsetY = e.pageY - pupilRect.top;

        const divisor = 500 //  divisor переназвати

        const maxOffset = ((eyeRect.width - pupilRect.width) / 2) / 16  // (/16) => to em
        const offsetLimit = divisor * maxOffset

        const setOffset = (offsetAxis) => {
            return Math.abs(offsetAxis) < offsetLimit
                ? offsetAxis / divisor + 'em'
                : offsetAxis > 0
                    ? maxOffset + 'em'
                    : -maxOffset + 'em'
        }
        const x = setOffset(offsetX)
        const y = setOffset(offsetY)

        setState(`translate(${x}, ${y})`)
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (leftPupil.current) calculatePosition(leftPupil, e, setLeftPupilTransform)
            if (rightPupil.current) calculatePosition(rightPupil, e, setRightPupilTransform)
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const pupilsData = [{
        ref: leftPupil,
        transform: leftPupilTransform,
        style: 'leftPupil'
    },
    {
        ref: rightPupil,
        transform: rightPupilTransform,
        style: 'rightPupil'
    },
    ]

    let eyesElements = pupilsData.map(p =>
        <div className='eyeBorder' key={p.style}>
            <div className='eye' ref={eye}>
                <div className={p.style} ref={p.ref}
                    style={{ transform: p.transform }}>
                    <div className='eyeBlink'></div>
                </div>
            </div>
        </div>
    )

    return (
        <div className={`eyes ${eyesClassName}`} >
            {eyesElements}
        </div>
    )
};

export default MovingEyes;