import Hero from "../pages/Hero";
import BookList from "../pages/BookList";
import Showcase from "../pages/Showcase";
import Testimonials from "../pages/Testimonials";
import Navbar from "../components/navbar/Navbar";

export default function Root({ user }: { user: String }) {
  return (
    <div className="nav-container">
      <Hero user={user} />
      <Showcase />
      <BookList />
      <Testimonials />
    </div>
  );
}
