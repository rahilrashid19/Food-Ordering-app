import { Outlet, Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Join Our Team
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          We're always looking for talented individuals to join our food-loving
          family!
        </p>
        <div className="mt-8">
          <div className="grid gap-6">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Software Engineer
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  We're seeking an experienced software engineer to help build
                  and improve our app.
                </p>
              </div>
              <div className="px-4 py-4 sm:px-6 bg-gray-50">
                <Link
                  to="apply"
                  href="#apply-link"
                  className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Apply Now &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Careers;
