import React, { useState } from 'react';
import './App.css';
import Example from './pages/hero';
import AboutUs from './pages/teams';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';


const navigation = [
  { name: 'Home', href: 'home-section' },
  { name: 'About Us', href: 'about-section' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed inset-x-2 bg-[rgba(250,250,250,40%)] border-amber-50 backdrop-blur-md top-0 z-50 rounded-3xl">
        <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mindful Journey</span>
              <img
                alt="Mindful Journey Logo" // Added alt text
                src="/lOGO.png"
                className="size-18 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              ☰
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-xl/15 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/chat" className="p-3 rounded-2xl text-xl/6 font-semibold text-gray-900 hover:bg-gray-100">
              Chat <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Mindful Journey</span>
                <img
                  alt="Mindful Journey Logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                ✕
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.href}`} 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link to="/chat" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Chat
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <section id="home-section">
        <Example />
      </section>
      <section id="about-section">
        <AboutUs />
      </section>
    </>
  );
}

export default App;