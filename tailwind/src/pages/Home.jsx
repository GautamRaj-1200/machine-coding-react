import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <h1 className="md:text-6xl sm:text-4xl text-3xl my-6 font-bold">
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
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Home;
