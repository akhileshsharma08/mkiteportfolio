import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextData } from '../context/Context';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';

const Home = () => {
  const { setSortedData, empData, setLoading } = ContextData();
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);

    const updatedItem = empData.find((curEle) => curEle.firstName === name);

    if (updatedItem) {
      setSortedData(updatedItem);
    }

    setLoading(false);

    console.log(updatedItem, "updated Item");
  }, [name, empData, setSortedData, setLoading]);

  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Home;
