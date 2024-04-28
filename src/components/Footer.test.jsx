import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom'


describe('Footer', () => {
  afterEach(cleanup);

  it('should render the Footer component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render all the links in the Legal Links section', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(getByText('Terms & Conditions')).toBeInTheDocument();
    expect(getByText('Privacy Policy')).toBeInTheDocument();
    expect(getByText('Cookie Policy')).toBeInTheDocument();
    expect(getByText('Security')).toBeInTheDocument();
  });

  it('should render all the links in the Sections', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(getByText('Product')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
    expect(getByText('Pricing')).toBeInTheDocument();
    expect(getByText('FAQ')).toBeInTheDocument();
    expect(getByText('Contact Us')).toBeInTheDocument();
  });
});
