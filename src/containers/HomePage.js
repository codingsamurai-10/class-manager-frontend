// import Typography from '@material-ui/core/Typography';
import React from 'react';
import TimeTableContainer from './TimeTableContainer';
import SlotChangingOptions from './SlotChangingOptions';
import { UserContext } from './UserContext';

const HomePage = () => {
    const [periodsSchedule, setPeriodsSchedule] = React.useState(null);

    const profileInfo = React.useContext(UserContext);

    return (
        <div>
            {profileInfo && profileInfo.admin && <SlotChangingOptions periodsSchedule={periodsSchedule} setPeriodsSchedule={setPeriodsSchedule} />}
            <TimeTableContainer periodsSchedule={periodsSchedule} setPeriodsSchedule={setPeriodsSchedule} />
        </div>
    );
}

export default HomePage;