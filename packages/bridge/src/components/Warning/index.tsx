import React from 'react';

export const Warning = () => {
  return (
    <div className="warning-box">
      <h2>Warning</h2>
      <span>
        To avoid loss of funds, you should never close the page before the
        transfer is completed and you should strictly follow the instructions
        here. Also make sure you have enough ETH and SOL to pay the fees.
      </span>
    </div>
  );
};
