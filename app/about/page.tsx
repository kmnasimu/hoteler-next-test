import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import About from '@/components/sections/Home4/About';

export default function AboutPage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="About Us" />
      <About/>
    </Layout>
  );
}
