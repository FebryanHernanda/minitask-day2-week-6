import { Link } from "react-router";

const HomePages = () => {
  return (
    <main className="max-w-screen-2xl mx-auto gap-20 w-full min-h-screen flex flex-col  justify-center">
      <h1 className="text-7xl text-white text-center font-bold">
        Minitask Day 2 - Week 6
      </h1>
      <div className="flex justify-center gap-50">
        <Link
          className="text-4xl  w-110 text-center p-20 rounded-2xl font-bold bg-gray-500 "
          to="/survey-app"
        >
          Smoker Survey
        </Link>
        <Link
          className="text-4xl text-center p-20 w-110 rounded-2xl font-bold bg-gray-500"
          to="/todo-app"
        >
          To-Do List
        </Link>
      </div>
    </main>
  );
};

export default HomePages;
