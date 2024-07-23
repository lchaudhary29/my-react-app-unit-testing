// src/ButtonComponent.tsx

import React, { useState } from 'react';
import { calculateSalary } from '../utilities/calculateSalary';
import { isEmployee } from '../constants/constants';

const ButtonComponent: React.FC = () => {
    const [text, setText] = useState('Click me');

    const baseSalary = 50000;
    const bonuses = [2000, 1500];
    const deductions = [1000, 500];

    const salary = calculateSalary(baseSalary, bonuses, deductions);

    if (isEmployee) {
        console.log(`The employee's total salary is: $${salary}`);
    }

    const handleClick = () => {
        setText('Clicked');
    };

    return <button onClick={handleClick}>{text}</button>;
};

export default ButtonComponent;
