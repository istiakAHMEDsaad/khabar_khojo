import { Outlet } from 'react-router';

import Header from '../components/Header';
import FooterBottom from '../components/FooterBottom';
import { ThemeProvider } from '@/components/theme-provider';

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        {/* h-68, h-388 */}
        <Header />
        <div className='min-h-[calc(100vh-456px)] overflow-hidden'>
          <Outlet />
        </div>
        <FooterBottom />
    </ThemeProvider>
  );
};

export default MainLayout;
