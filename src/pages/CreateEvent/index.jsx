const CreateEvent = () => {
  return (
    <div className="flex justify-center items-center w-[50%] mx-auto min-h-screen ">
      <div className="w-full p-8">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-center">Create Event</h2>
        </div>
        <div className="space-y-8">
          <div>
            <label className="block">Event Title</label>
            <input
              type="text"
              placeholder="Enter your text"
              className="w-full mt-2 p-4 border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block">Event Venue</label>
            <input
              type="text"
              placeholder="Enter your text"
              className="w-full mt-2 p-4 border-gray-300 rounded"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                className="w-full mt-2 p-4 border-gray-300 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Start Time</label>
              <input
                type="time"
                className="w-full mt-2 p-4 border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                className="w-full mt-2 p-4 border-gray-300 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">End Time</label>
              <input
                type="time"
                className="w-full mt-2 p-4 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center">Event Description</h2>
          <div className="mt-4">
            <label className="block text-gray-700">Event Image</label>
            <div className="w-full h-48 mt-2 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Event Description</label>
            <textarea
              placeholder="Type here..."
              className="w-full mt-2 p-4 border-gray-300 rounded"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button className="w-full mt-6 p-5 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
