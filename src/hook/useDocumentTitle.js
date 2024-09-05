import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const useDocumentTitle = (initialized) => {
  const { t } = useTranslation();
  let location = useLocation();

  useEffect(() => {
    if (initialized) {
      let currentPath = location.pathname.split('/')[1];
      document.title = t(`pageTitles.${currentPath}`);
    }
  }, [location, t]);
};
