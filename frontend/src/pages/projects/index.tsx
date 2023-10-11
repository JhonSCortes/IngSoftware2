import DeniedModal from "../../components/modals/DeniedModal";
import LandingComponent from "../../components/projects/lading/Index";

const ProjectPage = () => {
  const savedSession = localStorage.getItem("sessionToken");

  return (
    <>
      {/* <SimpleModalComponent text='Not useful at the moment, comeback later! 🔨' /> */}
      {savedSession? <LandingComponent  /> : <DeniedModal errorText="Not Logged in." /> }
    </>
  );
};

export default ProjectPage;
