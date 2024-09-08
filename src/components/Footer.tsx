// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Free Entry & Contact */}
        <div>
          <h3 className="font-bold mb-4">Info</h3>
          <p>
            National Museum
            <br />
            India
          </p>
          <p className="mt-2">+91 123456789</p>

          <div className="mt-4">
            <h3 className="font-bold">Opening hours</h3>
            <p>
              Daily: 10.00–19.00 (Sundays: 20:30)
              <br />
              Last entry: 16:45 (Sundays: 18:15)
            </p>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-4">About us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Governance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The National Museum story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h3 className="font-bold mb-4">Visit</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Museum map
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Exhibitions and events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Food and drink
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Audio guide
              </a>
            </li>
          </ul>
        </div>

        {/* Commercial */}
        <div>
          <h3 className="font-bold mb-4">Commercial</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Commercial hire
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Filming
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BM Images
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                British Museum Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Travel trade tours
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Study rooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Library and archive
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Search the collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
