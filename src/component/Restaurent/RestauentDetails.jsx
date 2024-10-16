import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuCard } from './MenuCard';

const categories =[
    "pizza",
    "briyani",
    "burger",
    "chicken",
    "rice"
]

const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-Vegeyarian", value:"non-vegetarian"},
    {label:"Seasonal", value:"seasonal"},
];

const menu =[1,1,1,1,1,1];
   


const RestauentDetails = () => {
    const [foodType,setFoodType]=useState("all")

    const handleFilter=(e)=>{
        console.log(e.target.value, e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
           <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
           <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className='w-full h-[40vh] object-cover'
                     src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover'
                     src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover'
                     src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Grid>
            </Grid>
            </div> 
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'> Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat accusantium ratione enim alias soluta modi asperiores est amet praesentium maiores dicta impedit dignissimos itaque expedita eligendi voluptatum quia, facere dolores.
                </p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>
                        Mumbai(Maharstra)
                    </span>
                </p>
                <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarMonthIcon/>
                    <span>
                        Mon-Sun: 9:00AM-9:00PM (Today)
                    </span>

                </p>
                </div>


            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {foodTypes.map((item)=> (
                                    <FormControlLabel
                                    key={item.value}
                                    value={item.value} 
                                    control={<Radio/>} 
                                    label={item.label} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                        
                        <Divider/>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {categories.map((item)=> (
                                    <FormControlLabel
                                    key={item}
                                    value={item} 
                                    control={<Radio/>} 
                                    label={item} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10 '>
                {menu.map((item)=><MenuCard/>)}
            </div>
        </section>
        <section>

        </section>

    </div>
  )
}

export default RestauentDetails