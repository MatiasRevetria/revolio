import { useContext } from 'react';
import PreferencesContext from '../context/preferences-context';

const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences must be used inside PreferencesProvider');
  return context;
};

export default usePreferences;
