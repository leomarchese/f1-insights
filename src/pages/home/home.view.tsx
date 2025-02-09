import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeView: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
};

export default HomeView;
