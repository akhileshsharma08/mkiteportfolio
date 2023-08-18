import React, { useEffect } from 'react';
import Contact from './Contact';
import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { ContextData } from '../context/Context';
import About from './About';

const Home = () => {
  const { setSortedData, empData, loading, setLoading } = ContextData();
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
   <About/>
      <Contact />
    </>
  );
};

export default Home;
