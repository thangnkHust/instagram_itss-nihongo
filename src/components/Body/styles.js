import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        width: '100%',
        // height: 1000,
        backgroundColor: '#fcfdff',
        justifyContent: 'center',
    },
    content: {
        width: '70%',
        justifyContent: 'center',
        height: '100%',
        
    },
    homePost: {
        height: '100%',
        padding: 20,
        border: '1px grey solid'
    },
    suggest: {
        height: '100%',
        border: '1px grey solid'
    }
}));