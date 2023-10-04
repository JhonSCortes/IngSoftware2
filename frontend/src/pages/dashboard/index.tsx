import LoggedModalComponent from "../../components/modals/LoggedModal";
import DeniedModal from "../../components/modals/DeniedModal";

const DashboardPage = () => {
  const savedSession = localStorage.getItem("sessionToken");

  return (
    <>
      {/* <SimpleModalComponent text='Not useful at the moment, comeback later! 🔨' /> */}
      {savedSession? <LoggedModalComponent user="" /> : <DeniedModal errorText="Not Logged in." /> }
    </>
  );
};

export default DashboardPage;
