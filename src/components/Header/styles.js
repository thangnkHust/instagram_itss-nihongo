import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        height: 90,
        width: '100%',
        backgroundColor: 'white',
        border: '1px #d7dbe0 solid',
        justifyContent: 'center'
    },
    content: {
        width: '70%',
        justifyContent: 'center'
    },

    //logo
    logoArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
    },
    logo: {
        width: 180,
        height: 60,
    },


    //search
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //function
    function: {
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 20,
        padding: 0
    }
}));