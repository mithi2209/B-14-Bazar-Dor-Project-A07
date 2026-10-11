import { FiLogOut } from "react-icons/fi";

const UpdateProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f3f6f4]  py-10 lg:py-36 px-4 md:px-8">

      <div className="max-w-200 mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            আমার প্রোফাইল
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            আপনার অ্যাকাউন্ট তথ্য এখানে দেখুন
          </p>
        </div>

        {/* --- User Info Card --- */}
        <div className="card w-full bg-white shadow-sm border border-gray-100 rounded-xl mb-6">
          <div className="card-body p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left Side: Avatar & Info */}
            <div className="flex items-center gap-4">
              {/* Avatar Image (Placeholder used) */}
              <div className="avatar">
                <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  Rezwan Ahmed
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  rezwanaahmed@gmail.com
                </p>
              </div>
            </div>

            {/* Right Side: Logout Button */}
            <button 
            

            className="btn btn-outline border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 hover:text-red-600 normal-case font-medium rounded-lg px-4 h-10 min-h-10">
              <FiLogOut className="text-lg" />
              সাইন আউট
            </button>
          </div>
        </div>

        {/* --- Update Form Card --- */}
        <div className="w-full bg-white shadow-sm border border-gray-100 rounded-xl">
          <div className="card-body p-6 md:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6">তথ্য</h3>

            <form className="space-y-6">
              {/* Name Input */}
              <div className="form-control w-full">
                <label className="label pt-0 pb-2">
                  <span className="label-text text-sm lg:text-lg font-medium text-gray-700">
                    নাম
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-white border-gray-200 focus:border-green-600 focus:outline-none rounded-lg text-sm h-12"
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-2">
                <button className="btn bg-[#15803d] hover:bg-[#166534] border-none text-white text-base font-medium rounded-lg h-12 min-h-12 w-full">
                  আপডেট
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
