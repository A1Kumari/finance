import * as React from 'react';
import FinanceCard from "../../components/FinanceCard"; // Adjust the path as needed
import { Box } from '@mui/material';

export default function GoalSetting() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <FinanceCard
        title="Plan to Buy a House"
        description="Start saving for a down payment and research mortgage options."
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <FinanceCard
        title="Plan to Buy a Car"
        description="Set a budget, research car options, and start saving for a down payment."
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <FinanceCard
        title="Plan to Buy a House"
        description="Start saving for a down payment and research mortgage options."
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <FinanceCard
        title="Plan to Buy a Car"
        description="Set a budget, research car options, and start saving for a down payment."
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      {/* Add more FinanceCard components with different titles, descriptions, and images */}
    </Box>
  );
}
