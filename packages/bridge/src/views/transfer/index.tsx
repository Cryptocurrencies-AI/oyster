import React from 'react';
import './index.less';
import { Transfer } from '../../components/Transfer';
import { Warning } from '../../components/Warning';

export const TransferView = () => {
  return (
    <>
      <div
        className="flexColumn transfer-bg"
        style={{ flex: 1, minHeight: '90vh' }}
      >
        <Transfer />
        <Warning />
      </div>
    </>
  );
};
