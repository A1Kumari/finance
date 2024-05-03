import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import Styles from "../../../styles/Home.module.css"

const BudgetTracker = () => {
  const [open, setOpen] = useState(true); // State to manage modal open/close
  const [income, setIncome] = useState(''); // State for income input
  const [expenses, setExpenses] = useState(''); // State for expenses input
  const [savings, setSavings] = useState(''); // State for savings input

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., store data in state or send it to the server
    console.log('Income:', income);
    console.log('Expenses:', expenses);
    console.log('Savings:', savings);
    setOpen(false); // Close the modal after submission
  };

  return (
    <>
      <Modal open={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" mb={2}>Budget Tracker</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Income"
              variant="outlined"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              fullWidth
              mb={2}
            />
            <TextField
              label="Expenses"
              variant="outlined"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              fullWidth
              mb={2}
            />
            <TextField
              label="Savings"
              variant="outlined"
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
              fullWidth
              mb={2}
            />
            <Button type="submit" variant="contained" color="primary">Save</Button>
          </form>
        </Box>
      </Modal>
      <div className={Styles.visulas}>
        <h1>Income :</h1> {income}
        <h2>Expenses: </h2> {expenses}
        <h2>Savings</h2> {savings}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae hic 
          cupiditate nostrum libero fugit ex incidunt? Tempore vel, dicta sed accusamus, tenetur doloribus eum animi ab quia numquam fugit?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae hic 
          cupiditate nostrum libero fugit ex incidunt? Tempore vel, dicta sed accusamus, tenetur doloribus eum animi ab quia numquam fugit?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae hic 
          cupiditate nostrum libero fugit ex incidunt? Tempore vel, dicta sed accusamus, tenetur doloribus eum animi ab quia numquam fugit?</p>
        
        <div>
          {/* Line chart goes here */}
        </div>
      </div>
    </>
  );
};

export default BudgetTracker;
