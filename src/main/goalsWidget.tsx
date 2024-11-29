import { useState } from "react";

const AddGoalModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    tool: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Goal: ", formData); // Replace with actual submission logic
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-stone-900 bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-stone-900 text-zinc-100 rounded-lg p-6 w-[90%] max-w-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Your Goal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tool/Framework Input */}
          <div>
            <label htmlFor="tool" className="block mb-1 text-sm">
              Programming Language / Tool
            </label>
            <input
              type="text"
              name="tool"
              id="tool"
              value={formData.tool}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-zinc-100 border border-gray-600"
              placeholder="e.g., React, Python"
              required
            />
          </div>
          {/* Date Input */}
          <div>
            <label htmlFor="date" className="block mb-1 text-sm">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-zinc-100 border border-gray-600"
              required
            />
          </div>
          {/* Time Input */}
          <div>
            <label htmlFor="time" className="block mb-1 text-sm">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-zinc-100 border border-gray-600"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-700 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-cyan-600 rounded"
            >
              Save Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PlanGoals = ({ toggleModal }: { toggleModal: () => void }) => {
  const goals = [
    { name: "Learn React", date: "2024-11-30 10:00" },
    { name: "Master TypeScript", date: "2024-12-05 14:00" },
    { name: "Learn React", date: "2024-11-30 10:00" },
    { name: "Master TypeScript", date: "2024-12-05 14:00" },
    { name: "Learn React", date: "2024-11-30 10:00" },
    { name: "Master TypeScript", date: "2024-12-05 14:00" }
  ]; 

  return (
    <div className="w-full h-full relative">
      <h1 className="text-white ml-2 flex items-center gap-1 mb-1 text-base">
        <img src="/utils/goal.svg" className="size-4" alt="Goal Icon" />
        Plan Your Goals
      </h1>
      <div className="h-[40vh] bg-white border-cyan-300 shadow-md rounded-lg overflow-y-auto p-4">
        {goals.length ? (
          <ul className="space-y-2">
            {goals.map((goal, index) => (
              <li
                key={index}
                className="p-3 rounded-lg bg-zinc-100 shadow-sm flex justify-between items-center"
              >
                <span className="text-gray-800 font-medium">{goal.name}</span>
                <span className="text-gray-500 text-sm">{goal.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No goals added yet.</p>
        )}
      </div>
      <button
          className="absolute z-10 bottom-3 right-3 shadow-sm shadow-black px-4 py-2 border-black border-2 bg-black text-white rounded-full text-lg"
          onClick={toggleModal}
        >
          +
        </button>
    </div>
  );
};

export const Goals = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);
  return(
    <>
      <PlanGoals toggleModal={toggleModal}/>
      <AddGoalModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}