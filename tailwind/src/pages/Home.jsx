import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <h1 className="my-6 text-3xl font-bold md:text-6xl sm:text-4xl">
          Machine Coding React
        </h1>
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to="/simple-navbar"
                className="text-lg font-medium border-b border-b-slate-700"
              >
                Simple Responsive Navbar
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/file-upload"
                className="text-lg font-medium border-b border-b-slate-700"
              >
                File Upload
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/drag-drop"
                className="text-lg font-medium border-b border-b-slate-700"
              >
                Drag & Drop
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/drag-drop-upload"
                className="text-lg font-medium border-b border-b-slate-700"
              >
                Drag & Drop with Upload
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Home;
