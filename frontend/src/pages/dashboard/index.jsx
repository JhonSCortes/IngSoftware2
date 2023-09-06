import React from 'react'
import SimpleModalComponent from '../../components/modals/SimpleModal';
import LoggedModalComponent from '../../components/modals/LoggedModal';

const DashboardPage = () => {
  return (
    <>
        {/* <SimpleModalComponent text='Not useful at the moment, comeback later! 🔨' /> */}
        <LoggedModalComponent/>
    </>
  )
}

export default DashboardPage;
