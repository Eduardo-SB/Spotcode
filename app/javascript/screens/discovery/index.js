import React from 'react';
import SectionWrapper from '../../components/common/section_wrapper'
import Discovery from '../../components/discovery';
import NavbarFooter from '../../components/common/navbar_footer';

export default function DiscoveryScreen() {
  return (
    <>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </>
  );
}