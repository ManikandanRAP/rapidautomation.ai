import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../../containers/Hosting/Navbar';
import FeatureSection from '../../containers/Hosting/Features';
import InfoSection from '../../containers/Hosting/Info';
import DomainSection from '../../containers/Hosting/Domain';
import PaymentSection from '../../containers/Hosting/Payment';
import GuaranteeSection from '../../containers/Hosting/Guarantee';
import FaqSection from '../../containers/Hosting/Faq';
import ServicesSection from '../../containers/Hosting/Services';
import BannerSection from '../../containers/Hosting/Banner';
import PricingSection from '../../containers/Hosting/Pricing';
import TestimonialSection from '../../containers/Hosting/Testimonials';
import Footer from '../../containers/Hosting/Footer';
import ContactSection from '../../containers/Hosting/Contact';
import Ctasection from '../../containers/Hosting/Ctasection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../../components/seo';

import InfoSolutionSection from '../../containers/Hosting/InfoSolution';

const ITPage = () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Hosting | A react next landing page" />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper className="ITPage">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <InfoSolutionSection />
          <Ctasection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default ITPage;