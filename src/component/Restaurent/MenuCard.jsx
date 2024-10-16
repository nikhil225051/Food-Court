import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo=[
    {
        Category:"Nuts & seeds",
        ingredients:["cashews"]
    },
    {
        Category:"Protein",
        ingredients:["Ground nuts","Bacon strips"]
    },
];

export const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                 <img
                 className='w-[7rem] h-[7rem] object-cover'
                  src="https://cdn.pixabay.com/photo/2024/02/06/10/53/ai-generated-8556731_640.jpg" alt="" />
                  <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'> Burger</p>
                    <p>₹499</p>
                    <p className='text-gray-400 '>nice food</p>
                  </div>
            </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    demo.map((item)=>
                        <div>
                            <p>{item.Category}</p>
                        <FormGroup>
                        {item.ingredients.map((item)=> <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item}/>)}
                   
                  </FormGroup>
                  </div>
                  )
                }
            </div>
            <div className='pt-5'>
                <Button variant='contained' disabled={false} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    
  )
}
