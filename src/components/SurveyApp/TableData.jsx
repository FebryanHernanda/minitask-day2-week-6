import { Plus, Trash } from "lucide-react";
import FormSurvey from "./FormSurvey";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../../redux/slice/surveySlice";

const TableData = () => {
  const [showModal, setShowModal] = useState(false);
  const formData = useSelector((state) => state.surveyForm.data);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(true);
  };

  const handleRemove = (id) => {
    dispatch(removeData(id));
  };

  return (
    <>
      <div className="flex items-center flex-col gap-5">
        <h2 className="text-4xl text-center">Survey Data</h2>
        <button
          className="flex gap-1.25 rounded-lg p-1.25 px-5 bg-green-600 cursor-pointer"
          onClick={toggleModal}
        >
          <p className="text-md text-white">Add</p>
          <Plus className="text-white w-5" />
        </button>
      </div>
      <table className="w-full text-2xl text-center items-center mt-10 border-collapse border border-gray-400">
        <thead>
          <tr className="border-gray-500 border">
            <th>No</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Merk Rokok</th>
          </tr>
        </thead>
        <tbody>
          {formData.length > 0 &&
            formData.map((data) => {
              return (
                <tr key={data.id} className="border-gray-300 border">
                  <td>{data.id}</td>
                  <td>{data.nama}</td>
                  <td>{data.status}</td>
                  <td>{data.merkRokok.join(", ")}</td>
                  <td className="p-5">
                    <button
                      className="bg-red-500 p-1 rounded-lg cursor-pointer"
                      onClick={() => handleRemove(data.id)}
                    >
                      <Trash className="text-white" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {showModal && <FormSurvey setShowModal={setShowModal} />}
    </>
  );
};

export default TableData;
