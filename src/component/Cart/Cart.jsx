import { Box, Button, Card, Divider, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CartItem } from './CartItem';
import { AddressCard } from './AddressCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Field, Form, Formik } from 'formik';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
};

// const validationSchema = Yup.object().shape({
//   streetAddress: Yup.string().required('Street Address is required'),
//   state: Yup.string().required('State is required'),
//   pincode: Yup.string().required('Pincode is required'),
//   city: Yup.string().required('City is required'),
// });

const items = [1, 1];

export const Cart = () => {
  const [open, setOpen] = useState(false);

  const createOrderUsingSelectedAddress = () => {
    // Implement the function
  };

  const handleOpenAddressModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    console.log("Form values", values);
  };

  return (
    <main className='lg:flex justify-between'>
      <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
        {items.map((item, index) => (
          <CartItem key={index} />
        ))}
        <Divider />
        <div className='billDetails px-5 text-sm'>
          <p className='font-extralight py-5'>Bill Details</p>
          <div className='space-y-3'>
            <div className='flex justify-between text-gray-400'>
              <p>Item Total</p>
              <p>₹599</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Delivery fee</p>
              <p>₹21</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>GST and Restaurant Charges</p>
              <p>₹33</p>
            </div>
            <Divider />
            <div className='flex justify-between text-gray-400'>
              <p>Total pay</p>
              <p>₹3300</p>
            </div>
          </div>
        </div>
      </section>
      <Divider orientation='vertical' flexItem />
      <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
        <div>
          <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
          <div className="flex gap-5 flex-wrap justify-center">
            {[1, 1, 1, 1, 1].map((item, index) => (
              <AddressCard key={index} handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />
            ))}
            <Card className="flex gap-5 w-64 p-5">
              <AddLocationAltIcon />
              <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg">Add new address</h1>
                <Button variant="outlined" fullWidth onClick={handleOpenAddressModal}>Add</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field as={TextField} name="streetAddress" label="Street Address" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="state" label="State" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="city" label="City" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="pincode" label="Pincode" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" type="submit" color="primary">Deliver Here</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </main>
  );
};
