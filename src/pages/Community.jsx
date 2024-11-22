import React from 'react';
import BookCard from '../components/Bookcard.tsx';
import './Community.css';
import '../index.css';

const Community = () => {
  // Handle horizontal scroll for popular books
  const handleScroll = (event) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="community-page">
      <h1>Welcome to the Book Lovers Community</h1>
      <p>Connect, share, and discover with fellow book enthusiasts. Join discussions, attend events, and explore recommended reads.</p>

      {/* Call to Action Banner */}
      <div className="cta-banner">
        <h2>Join Our Book Club Today!</h2>
        <p>Connect with like-minded readers and enjoy monthly virtual meet-ups.</p>
        <button className="cta-button">Become a Member</button>
      </div>

      {/* Latest Discussions */}
      <section className="discussion-section">
        <h2>Latest Discussions</h2>
        <ul>
          <li><strong>Discussion 1:</strong> What’s everyone reading this month?</li>
          <li><strong>Discussion 2:</strong> Favorite book-to-movie adaptations?</li>
          <li><strong>Discussion 3:</strong> Tips for organizing a home library</li>
          <li><strong>Discussion 4:</strong> Recommended reads for winter</li>
        </ul>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li><strong>Virtual Book Club:</strong> December 10th at 7 PM</li>
          <li><strong>Author Q&A:</strong> January 5th with a best-selling author</li>
          <li><strong>Book Swap:</strong> January 20th at 5 PM</li>
        </ul>
      </section>

      {/* Member Spotlight */}
      <section className="member-spotlight">
        <h2>Member Spotlight</h2>
        <p>This month’s featured member is Sarah, an avid historical fiction fan with over 200 books read!</p>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books">
        <h2>Popular Books in the Community</h2>
        <div className="book-list" onWheel={handleScroll}>
          <BookCard
            image="path/to/night-circus.jpg"
            title="The Night Circus"
            author="Erin Morgenstern"
            description="A magical story of a mysterious circus."
            availability="Available"
          />
          <BookCard
            image="path/to/crawdads.jpg"
            title="Where the Crawdads Sing"
            author="Delia Owens"
            description="A captivating tale set in the marshlands."
            availability="Unavailable"
          />
          <BookCard
            image="path/to/educated.jpg"
            title="Educated"
            author="Tara Westover"
            description="A memoir of overcoming adversity."
            availability="Available"
          />
          <BookCard
            image="path/to/achilles.jpg"
            title="The Song of Achilles"
            author="Madeline Miller"
            description="A retelling of the legend of Achilles and Patroclus."
            availability="Unavailable"
          />
          {/* Add more BookCard components as needed */}
        </div>
      </section>
    </div>
  );
};

export default Community;
