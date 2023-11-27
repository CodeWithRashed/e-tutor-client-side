import { ButtonArrow } from "../../Components/Shared/Buttons";

const MyClassDetails = () => {
  return (
    <div className="p-5">
      <div className="my-3 flex justify-between pr-5">
        <button className="bg-color-primary p-3 rounded-full text-white text-xl ">
          Create Assignment
        </button>
        <ButtonArrow>Manage Classes</ButtonArrow>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8"></div>
        <div className="flex text-center flex-col col-span-4">
          <div className="p-4">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Total Enrollment</p>
            </div>
          </div>

          <div className="p-4">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74
              </h2>
              <p className="leading-relaxed">Today&apos; Assignment</p>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Total Assignment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassDetails;
