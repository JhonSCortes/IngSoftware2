import DeniedModal from "../../components/modals/DeniedModal";
import LandingComponent from "../../components/projects/lading/Index";

// Project page to check if the user is logged in and continue to the  landing component.
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
