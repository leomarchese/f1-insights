import { Outlet } from 'react-router-dom';

interface ResultsViewProps {
  year?: string;
}

const ResultsView: React.FC<ResultsViewProps> = ({ year }) => {
  return (
    <div>
      <h1>Results Page {year}</h1>
      <Outlet />
    </div>
  );
};

export default ResultsView;
