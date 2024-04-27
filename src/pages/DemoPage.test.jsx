import React from 'react';
import { render, fireEvent, getByTitle, waitFor } from '@testing-library/react';
import DemoPage from './DemoPage';
import "@testing-library/jest-dom";
import { act } from 'react';

describe('DemoPage component', () => {
    test('message div appears when button is clicked', () => {
        const { getByText, getByLabelText } = render(<DemoPage />);

        act(async () => {
            fireEvent.change(getByLabelText('Company Name'), { target: { value: 'Test Company' } });
            fireEvent.change(getByLabelText('Company URL'), { target: { value: 'http://testcompany.com' } });
            fireEvent.change(getByLabelText('Your Email'), { target: { value: 'test@test.com' } });
            fireEvent.change(getByLabelText('Agents Language'), { target: { value: 'English' } });
            fireEvent.change(getByLabelText('Companys Value Proposition'), { target: { value: 'Value proposition' } });
            fireEvent.change(getByLabelText('Which type of problems do your company solve?'), { target: { value: 'Problems' } });
            fireEvent.change(getByLabelText('Company ICP'), { target: { value: 'ICP' } });
            fireEvent.change(getByLabelText('Any other important notes?'), { target: { value: 'Notes' } });

            await waitFor(() => fireEvent.click(getByText('Start Free Trial')))

            expect(getByText("Your Pondeo journey starts soon!")).toBeInTheDocument();
        })




    });
});
