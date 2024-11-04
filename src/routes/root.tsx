import Navbar from "../components/navbar/Navbar";
import Hero from "../pages/Hero";
import BookList from "../pages/BookList";
import Showcase from "../pages/Showcase";
import FeaturedBooks from "../pages/FeaturedBooks";
import Testimonials from "../pages/Testimonials";
import Footer from "../pages/Footer";

export default function Root() {
  return (
    <div className="nav-container">
      <Navbar />
      <Hero />
      <Showcase />
      <FeaturedBooks />
      <BookList />
      <Testimonials />
      <Footer />
    </div>
  );
}
