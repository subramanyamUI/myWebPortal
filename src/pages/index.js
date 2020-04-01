import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PortPolio from '../components/portpolio'
import '../css/global.css';

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`]} title="Subramanyam Reddy" />
      <PortPolio/>
    </Layout>
  );
}

export default IndexPage;
