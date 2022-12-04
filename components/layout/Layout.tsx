import React from 'react';
import Header from '../header/Header';
import { StyledLayout } from './Layout.style';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
}
