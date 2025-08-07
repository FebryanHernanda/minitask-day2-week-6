import { Link } from "react-router";
import TableData from "./TableData";
import { StepBack } from "lucide-react";

const SurveyApp = () => {
  return (
    <section className="max-w-screen-2xl mx-auto gap-20 w-full min-h-screen flex flex-col justify-center relative">
      <h1 className="text-center text-7xl">Survey App</h1>

      <div className="bg-white rounded-lg text-black p-5 ">
        <TableData />
      </div>

      <Link className="flex items-center flex-col gap-5" to="/">
        <StepBack size={50} />
        Back to Home
      </Link>
    </section>
  );
};

export default SurveyApp;
