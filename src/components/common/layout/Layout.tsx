import { Outlet } from 'react-router-dom';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
