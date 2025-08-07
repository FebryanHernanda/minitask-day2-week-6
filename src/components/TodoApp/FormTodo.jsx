import { Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTodo } from "../../redux/slice/todoSlice";

const FormTodo = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoForm.formInput);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStatus = (e) => {
    const { name, value } = e.target;

    const convertedValue = name === "status" ? value === "true" : value;

    dispatch(setTodo({ name, value: convertedValue }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setTodo({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    dispatch(addTask());
  };

  return (
    <section className="absolute inset-0 flex justify-center items-center bg-[rgba(36,36,36,0.5)]">
      <form
        className="p-5 bg-white w-150 rounded-xl flex flex-col gap-5 shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full bg-orange-500 ">
          <X className="absolute right-0 cursor-pointer" onClick={closeModal} />
        </div>

        <h1 className="text-center text-4xl">Todo Data Form</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="nama" className="text-xl font-semibold">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={state.nama}
            onChange={handleChange}
            placeholder="Nama Anda"
            className="border-gray-300 border-1 p-1"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status" className="text-xl font-semibold">
            Status Perokok
          </label>
          <select
            name="status"
            id="status"
            value={String(state.status)}
            onChange={handleStatus}
            className="border-gray-300 border-1 p-1"
            required
          >
            <option value="" disabled>
              Pilih Status
            </option>
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </select>
        </div>

        <div className="w-full justify-center flex">
          <button className="flex gap-1.25 rounded-lg p-1.25 px-5 text-center w-fit  bg-green-600 cursor-pointer ">
            <p className="text-md text-white">Tambah Data</p>
            <Plus className="text-white w-5" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormTodo;
