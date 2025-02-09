import React from 'react';
import ResultsView from './results.view';
import { useParams } from 'react-router-dom';

const ResultsController: React.FC = () => {
  const { year } = useParams<{ year: string }>();

  return <ResultsView year={year} />;
};

export default ResultsController;
