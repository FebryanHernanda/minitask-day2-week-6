import { Check, Edit, Plus, Trash, X } from "lucide-react";
import { useState } from "react";
import FormTodo from "./FormTodo";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, setEditId, toggleTask } from "../../redux/slice/todoSlice";
import FormEdit from "./FormEdit";

const TodoData = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoForm.data);
  console.log(todoData);

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const openModalEdit = (task) => {
    dispatch(setEditId(task));

    setShowModalEdit(true);
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  const toggleStatus = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <>
      <div className="flex items-center flex-col gap-5">
        <h2 className="text-4xl text-center">Todo List Data</h2>
        <button
          className="flex gap-1.25 rounded-lg p-1.25 px-5 bg-green-600 cursor-pointer"
          onClick={openModal}
        >
          <p className="text-md text-white">Add</p>
          <Plus className="text-white w-5" />
        </button>

        {todoData.length > 0 &&
          todoData.map((item) => {
            return (
              <div
                key={item.id}
                className=" flex flex-col w-100 gap-5 border-1 p-10 rounded-xl"
              >
                <div className="flex gap-5">
                  <h3 className="font-bold">Nama Task : </h3>
                  <p>{item.nama}</p>
                </div>
                <div className="flex gap-5">
                  <h3 className="font-bold">Status Task : </h3>
                  <p>{item.status ? "Completed" : "Not Completed"}</p>
                </div>
                <div className="flex justify-center gap-5">
                  <button
                    className="bg-red-500 p-1 rounded-lg cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Trash className="text-white" />
                  </button>
                  <button
                    className="bg-orange-300 p-1 rounded-lg cursor-pointer"
                    onClick={() => openModalEdit(item.id)}
                  >
                    <Edit className="text-white" />
                  </button>
                  {!item.status ? (
                    <button
                      className="bg-green-400 p-1 rounded-lg cursor-pointer"
                      onClick={() => toggleStatus(item.id)}
                    >
                      <Check className="text-white" />
                    </button>
                  ) : (
                    <button
                      className="bg-red-400 p-1 rounded-lg cursor-pointer"
                      onClick={() => toggleStatus(item.id)}
                    >
                      <X className="text-white" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <table className="w-full text-2xl text-center items-center mt-10 border-collapse border border-gray-400"></table>
      {showModal && <FormTodo setShowModal={setShowModal} />}
      {showModalEdit && <FormEdit setShowModalEdit={setShowModalEdit} />}
    </>
  );
};

export default TodoData;
