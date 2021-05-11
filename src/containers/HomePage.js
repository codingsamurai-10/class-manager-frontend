// import Typography from '@material-ui/core/Typography';
import React from 'react';
import TimeTableContainer from './TimeTableContainer';
import SlotChangingOptions from './SlotChangingOptions';

const HomePage = () => {
    const [periodsSchedule, setPeriodsSchedule] = React.useState(null);

    return (
        <div>
            <SlotChangingOptions periodsSchedule={periodsSchedule} setPeriodsSchedule={setPeriodsSchedule} />
            <TimeTableContainer periodsSchedule={periodsSchedule} setPeriodsSchedule={setPeriodsSchedule} />
        </div>
    );
}

export default HomePage;