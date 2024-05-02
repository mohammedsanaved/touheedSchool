import React, { useState } from 'react';
import {AdditionalTabsStyles} from "./AdditionalTabsStyles";
import { Tabs, Tab, Box, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoopIcon from '@mui/icons-material/Loop';
import ScienceIcon from '@mui/icons-material/Science';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };





const AdditionalTabs = () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <AdditionalTabsStyles>
          <div className='add-tab-bg'>
            <h3 className='addtional-tabs-title'>Our Additional Innovative Concepts</h3>
            <div className='additional-tabs-container'>
      <Box sx={{ width: '100%' }}>
      
        <Tabs
        value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          // indicatorColor="rgba(4, 156, 80, 1)"
          style={{ indicator: { backgroundColor: 'rgba(4, 156, 80, 1)' } }}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          className='scrollable-tabs'
          
        >
          <Tab icon={<MenuBookIcon />} label="Deeniyath Education" />
          <Tab icon={<LoopIcon />} label="Life Skill Education" />
          <Tab icon={<ScienceIcon />} label="Activity Lab" />
          <Tab icon={<LibraryBooksIcon />} label="KREDOO Curriculum" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <div className='add-tab-container d-flex'>
            <img src="/assets/images/education.jpg" alt="" className='add-tab-img' />
            <div>
              <h4 className='add-tab-title'>Deeniyath Education</h4>
            <p className='add-tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='add-tab-container d-flex'>
            <img src="/assets/images/education.jpg" alt="" className='add-tab-img' />
            <div>
              <h4 className='add-tab-title'>Life Skill Education</h4>
            <p className='add-tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='add-tab-container d-flex'>
            <img src="/assets/images/education.jpg" alt="" className='add-tab-img' />
            <div>
              <h4 className='add-tab-title'>Activity Lab</h4>
            <p className='add-tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='add-tab-container d-flex'>
            <img src="/assets/images/education.jpg" alt="" className='add-tab-img' />
            <div>
              <h4 className='add-tab-title'>KREDOO Curriculum</h4>
            <p className='add-tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </TabPanel>
      </Box>
      </div>
      </div>
      </AdditionalTabsStyles>
    );
  };

export default AdditionalTabs;