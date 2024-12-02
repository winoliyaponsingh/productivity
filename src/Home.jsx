// src/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFD09B] text-[#482026] font-sans">
      {/* Header Section - Sticky Navbar */}
      <header className=" bg-[#FFD09B] shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="text-3xl font-bold text-[#2a092b]">Breath.</div>

        <nav className="space-x-6 text-lg">
  <a href="/pomodoro" className="hover:text-[#659287]">Pomodoro Technique</a>
  <a href="/guided-breathing" className="hover:text-[#659287]">Guided Breathing</a>
</nav>


        <button className="bg-[#2a092b] text-white px-6 py-2 rounded-full hover:bg-[#659287] transition duration-300">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-[#659287] text-center py-16">
        <h1 className="text-5xl font-extrabold mb-4 text-[#2a092b] font-serif">Elevate Your Focus, One Breath at a Time</h1>
        <p className="text-xl mb-8 text-[#482026]">One way to unlock your potential—breathe, focus, and conquer your goals..</p>
        <button className="bg-[#2a092b] text-white py-3 px-8 rounded-full text-lg hover:bg-[#9fb28a] transition duration-300">
          Let's Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-[#FFD09B]">
      <h2 className="text-4xl font-bold text-center text-[#2a092b] mb-4">Pause. Breathe. Reset.</h2>
        <h2 className="text-2xl font-bold text-center text-[#2a092b] mb-8">Your Wellness Journey Starts in 5 Minutes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">

          
          {/* Habit Tracker Feature */}
          <div className="p-6 bg-[#482026] text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl  text-center mb-4 font-serif">Gentle Stretching</h3>
            <p className="text-center text-lg">Stretch your body, strengthen your mind. Track your progress daily</p>
          </div>

          {/* Guided Breathing Tool Feature */}
          <div className="p-6 bg-[#482026] text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl  text-center mb-4 font-serif">Gratitude Journaling</h3>
            <p className="text-center text-lg">Breathe deeply, reflect often. Cultivate gratitude and calm your mind.</p>
          </div>

          {/* Pomodoro Timer Feature */}
          <div className="p-6 bg-[#482026] text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl  text-center mb-4 font-serif">Nature Walk</h3>
            <p className="text-center text-lg">Walk with purpose, work with focus. Boost your productivity through nature.</p>
          </div>

          {/* Wellness Activity Suggestions Feature */}

          <div className="p-6 bg-[#482026] text-white rounded-lg shadow-lg hover:shadow-xl transition duration-900">
            <h3 className="text-2xl  text-center mb-4 font-serif">Doodling Break</h3>
            <p className="text-center text-lg">Let your creativity flow. Take a break and reset with a doodle.</p>
          </div>


        </div>

      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-[#FFD09B] text-[#482026]">
        <h2 className="text-2xl font-extrabold text-center text-[#2a092b] mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl font-semibold">Name</label>
              <input type="text" id="name" name="name" className="w-full p-4 border border-gray-300 rounded-lg" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-xl font-semibold">Email</label>
              <input type="email" id="email" name="email" className="w-full p-4 border border-gray-300 rounded-lg" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-xl font-semibold">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-4 border border-gray-300 rounded-lg" required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#2a092b] text-white py-3 px-4 rounded-full text-lg hover:bg-[#659287] transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#2a092b] text-white py-6 text-center">
        <p>&copy; 2024 Ctrl. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
