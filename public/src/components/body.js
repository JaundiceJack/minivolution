//Import Components
import Nav    from './nav/_nav.js';
import Footer from './pages/footer.js'
import PageRoutes from './pageRoutes.js';

const Body = () => {
  return (
    <div className={
      `min-h-screen flex sm:flex-row flex-col
      bg-gradient-to-b from-blue-100 to-red-100`}>
      <Nav />
      <div className="flex flex-col w-full">
        <div className="grow">
          <PageRoutes />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Body;
