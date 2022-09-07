import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

const About = () => {
  const params = useParams();
  console.log(params);
  return (
    <Layout>  
      <div>about</div>
    </Layout>
  );
};

export default About;