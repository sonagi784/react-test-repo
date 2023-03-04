import { Outlet } from 'react-router-dom';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';

function Layout() {
  const headerProps = {
    left: [
      { name: 'Home', type: 'HOME' },
      { name: 'Error', type: 'ERROR' },
    ],
    right: [{ name: 'Search', type: 'SEARCH' }],
    mid: { name: 'hello' },
  };

  return (
    <div className="App">
      <Header left={headerProps.left} right={headerProps.right} mid={headerProps.mid} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
