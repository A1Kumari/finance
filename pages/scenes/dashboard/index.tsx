import React from 'react';
import { Box } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import BudgetTracker from './BudgetTracker'; // Import BudgetTracker component
import GoalSetting from './goalSetting.jsx';
import InvestmentPortfolio from './InvestmentPortfolio';
import ChatIcon from '@mui/icons-material/Chat';
import styles from '../../../styles/Home.module.css';

const Dashboard = () => {
  const openChat = () => {
    // Redirect to chat dashboard page
    // Replace '/chat' with the actual path of your chat dashboard page
    window.location.href = '/Chatbot';
  };

  return (
    <>
      {/* BudgetTracker is now integrated
      <BudgetTracker /> */}
      <GoalSetting />
      <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        sx={{
          gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
          gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
          gridTemplateAreas:
            '"a b c" "a b c" "a b c" "a b f" "d e f" "d e f" ',
        }}
      >
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
      <InvestmentPortfolio />
      {/* Clickable chat icon */}
      <ChatIcon className={styles.chat} onClick={openChat} />
    </>
  );
};

export default Dashboard;
