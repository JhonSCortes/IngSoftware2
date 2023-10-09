import DeniedModal from "../../components/modals/DeniedModal";
import TaskLandingComponent from "../../components/projects/task/TaskLanding";

const TaskPage = () => {
  const savedSession = localStorage.getItem("sessionToken");

  return (
    <>
      {/* <SimpleModalComponent text='Not useful at the moment, comeback later! 🔨' /> */}
      {savedSession? <TaskLandingComponent  /> : <DeniedModal errorText="Not Logged in." /> }
    </>
  );
};

export default TaskPage;