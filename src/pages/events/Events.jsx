import React from 'react';
import "./Events.css";
import BannerSection from "../../components/BannerSection/BannerSection"
import SingleEvent from '../../components/SingleEvent/SingleEvent';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Events = () => {


    const data = {
        title: 'Home/Event',
        
        bg_image:'../assets/images/HomeEvent.png',
      };


      const ITEM_HEIGHT = 48;
      const ITEM_PADDING_TOP = 8;
      const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };

      const schools = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
      ];

      const categories = [
        'Trending',
        'Most Supported',
        'Sports',
        'Science',
        'Activity',
      ];

      function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }


      const theme = useTheme();
      const [schoolName, setSchoolName] = React.useState([]);
      const [categoryName, setCategoryName] = React.useState([]);

    
      const handleChangeSchool = (event) => {
        const {
          target: { value },
        } = event;
        setSchoolName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleChangeCategory = (event) => {
        const {
          target: { value },
        } = event;
        setCategoryName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };



  return (
    <>

    
    <BannerSection data={data} />

    <div className='event-page-div mx-auto'>

    <div className='d-flex justify-content-between filter-event-div'>
        <div>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
        style={{marginBottom:"70px"}}
          multiple
          displayEmpty
          value={schoolName}
          onChange={handleChangeSchool}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Schools</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select Schools</em>
          </MenuItem>
          {schools.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, schoolName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={categoryName}
          onChange={handleChangeCategory}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Categories</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select Categories</em>
          </MenuItem>
          {categories.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, categoryName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
        <div>
    <SingleEvent/>
    <SingleEvent/>

    <SingleEvent/>

    <SingleEvent/>
    </div>

    </div>
    </div>
    </>
  )
}

export default Events