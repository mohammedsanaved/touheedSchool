import React, { useEffect } from 'react';
import { SchoolAboutUsStyle } from "./SchoolAboutUsStyle";
import AboutUsTwo from '../../components/AboutUsTwo';
import HeaderTwo from '../../components/HeaderTwo';
import BannerSection from '../../components/BannerSection/BannerSection';
import TabBox from '../../components/TabBox.js';
import AdditionalTabs from '../../components/AdditionalTabs/AdditionalTabs.jsx';
import Infrastructure from '../SchoolPage/components/Infrastructure.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { schoolAboutUs } from '../../actions/schoolActions.js';
import { useParams } from 'react-router-dom';
import FooterSchool from '../../components/FooterSchool/FooterSchool.jsx';

const SchoolAboutUs = () => {

  const bg = "./assets/images/eventspageimage.png";
  const {
    id
  } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(schoolAboutUs(id))
  }, [dispatch,id])

  const  schoolAboutUsdata= useSelector(state=> state.schoolAboutUs);
  const {school, loading} = schoolAboutUsdata
  console.log(school, "Data from schoolAboutUs");




  return (
    <SchoolAboutUsStyle>
      <HeaderTwo />
      <BannerSection bg_image={bg} title={"Home/Events"} />
      <div className="breadcrumbs-div mx-auto">
        <p>
          <span className="color-purple"> Touheed</span>/ Touheed English
          medium School
        </p>
      </div>
      <AboutUsTwo 
      description={school.description}
      image={school.image}
      video={school.video}
       /> 
      <TabBox why_us = {school.summary} vision={school.vision} mission={school.mission} aim={school.aim} transportation={school.transportation} />
      <AdditionalTabs />
      <Infrastructure infrastructure={school.infrastructure} />
      <FooterSchool
          logo={school.logo}
          events={school.events}
          description={school.description}
        />
    </SchoolAboutUsStyle>
  )
}

export default SchoolAboutUs