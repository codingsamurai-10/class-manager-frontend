import Typography from '@material-ui/core/Typography';
import TimeTableContainer from './TimeTableContainer';

const HomePage = () => {
    return (
        <div>
            <Typography variant="h1">Homepage of the app</Typography>
            <TimeTableContainer />
        </div>
    );
}

export default HomePage;