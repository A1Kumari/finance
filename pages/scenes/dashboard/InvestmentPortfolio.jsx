import React, { useState } from 'react';

const InvestmentPortfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  // Sample list of investment portfolios
  const portfolios = [
    { id: 1, name: 'Retirement Portfolio', description: 'Diversified portfolio for long-term retirement savings.' },
    { id: 2, name: 'Stocks Portfolio', description: 'Investment in individual stocks for potential high returns.' },
    { id: 3, name: 'Mutual Funds Portfolio', description: 'Investment in a variety of mutual funds for diversification.' },
    // Add more portfolios as needed
  ];

  // Function to handle portfolio selection
  const handlePortfolioSelect = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  // Function to handle going back to the portfolio selection
  const handleGoBack = () => {
    setSelectedPortfolio(null);
  };

  // Render portfolio selection screen
  const renderPortfolioSelection = () => (
    <div>
      <h2>Choose an Investment Portfolio</h2>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id} onClick={() => handlePortfolioSelect(portfolio)}>
            {portfolio.name}
          </li>
        ))}
      </ul>
    </div>
  );

  // Render portfolio details and analysis screen
  const renderPortfolioDetails = () => (
    <div>
      <h2>{selectedPortfolio.name}</h2>
      <p>{selectedPortfolio.description}</p>
      {/* Add further analysis and options here */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );

  return (
    <div>
      <h1>Investment Portfolio Management</h1>
      {selectedPortfolio ? renderPortfolioDetails() : renderPortfolioSelection()}
    </div>
  );
};

export default InvestmentPortfolio;
