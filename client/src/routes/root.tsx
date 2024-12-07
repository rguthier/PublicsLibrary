import Navbar from "../components/navbar/Navbar";
import Hero from "../pages/Hero";
import BookList from "../pages/BookList";
import Showcase from "../pages/Showcase";
import Testimonials from "../pages/Testimonials";

export default function Root({ user }: { user: String }) {
  return (
    <div className="nav-container">
      <Navbar />
      <Hero user={user} />
      <Showcase />
      <BookList />
      <Testimonials />
    </div>
  );
}
