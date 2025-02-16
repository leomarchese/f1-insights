import React from 'react';
import { Driver } from '../../../types'; // ajuste o caminho conforme necessário

interface DriverCellProps {
  driver: Driver;
}

const DriverCell: React.FC<DriverCellProps> = ({ driver }) => {
  return (
    <>
      {/* Em telas grandes (lg ou superior): mostra nome completo */}
      <span className="hidden lg:inline">
        {driver.givenName} {driver.familyName}
      </span>

      {/* Em telas médias (md até lg): mostra apenas o familyName */}
      <span className="hidden md:inline lg:hidden">{driver.familyName}</span>

      {/* Em telas pequenas (abaixo de md): mostra o código */}
      <span className="inline md:hidden">{driver.code}</span>
    </>
  );
};

export default DriverCell;
