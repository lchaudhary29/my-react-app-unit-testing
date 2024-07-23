// src/ButtonComponent.test.tsx

import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from './ButtonComponent';
// Import the module that contains calculateSalary
import * as CalculateSalaryModule from '../utilities/calculateSalary';
import * as ConstantModule from '../constants/constants';

describe('<ButtonComponent />', () => {
    // Spy on calculateSalary before the tests run
    let calculateSalarySpy: jest.SpyInstance<number, [baseSalary: number, bonuses?: number[] | undefined, deductions?: number[] | undefined]>;

    beforeEach(() => {
        // Use jest.spyOn to spy on the calculateSalary function
        calculateSalarySpy = jest.spyOn(CalculateSalaryModule, 'calculateSalary').mockReturnValue(100000);
        // Optional: Mock the implementation if needed
        // calculateSalarySpy.mockImplementation(() => 100000);

        Object.defineProperty(ConstantModule, "isEmployee", { value: true });

    });

    afterEach(() => {
        // Ensure the spy is restored to its original state after each test
        calculateSalarySpy.mockRestore();
    });

    it('renders correctly, and changes text on click', () => {
        const wrapper = shallow(<ButtonComponent />);


        expect(wrapper.text()).toBe('Click me');

        wrapper.find('button').simulate('click');
        expect(wrapper.text()).toBe('Clicked');
        expect(wrapper).toMatchSnapshot();
    });

    it('test calculateSalary', () => {

        calculateSalarySpy.mockRestore();
        // Call the function to test the spy
        const result = CalculateSalaryModule.calculateSalary(50000, [2000, 1500], [1000, 500]);
        // If you mocked the implementation, assert the mocked return value
        expect(result).toBe(52000);
    });
});
