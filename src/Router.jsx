import { BrowserRouter, Route, Routes } from "react-router";
import HomePages from "./components/HomePages";
import SurveyApp from "./components/SurveyApp/SurveyApp";
import TodoApp from "./components/TodoApp/TodoApp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/survey-app" element={<SurveyApp />} />
        <Route path="/todo-app" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
