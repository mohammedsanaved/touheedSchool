import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerSection from '../../components/BannerSection/BannerSection';
import { useSelector } from 'react-redux';
import AboutUs from '../../components/AboutUs';
import LetsTakeAdmission from '../../components/LetsTakeAdmission/LetsTakeAdmission';
import HomeBlog from '../../components/HomeBlog';
import ContactInfoSection from '../../components/ContactInfoSection/ContactInfoSection';
import ReadMoreSection from '../../components/ReadMoreSection';


const SchoolPage = () => {

  const data = {
    title: 'Touheed English Medium School',
    
    bg_image:'../assets/images/SchoolBgImage.png',
  };

  const eventList = useSelector( state => state.eventList )
  const {event, error, loading } = eventList



  return (
    <>
    <Header/>
   
    <BannerSection data={data} />

    <ReadMoreSection/>

    <LetsTakeAdmission/>

    <HomeBlog eventListData={eventList} />

    <ContactInfoSection/>

    <Footer/>
    
    </>
  )
}

export default SchoolPage