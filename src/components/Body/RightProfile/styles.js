import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        margin: 30
    },
    account: {
        marginTop: 50,
        marginBottom: 30,
        // backgroundColor: 'grey'
    },
    avatar: {
        width: 90,
        height: 90,
    },
    nameAccount: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        paddingLeft: 20,
        // backgroundColor: 'green',
    },
    textAccount: {
        fontSize: 20,
        fontFamily: 'time new roman'
    },


    anotherAccount: {
        marginBottom: 15,
    },
    avatarSuggest: {
        width: 60,
        height: 60,
    },
    nameAccountSuggest: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        paddingLeft: 20,
        // backgroundColor: 'green',
    },
    textAccountSuggest: {
        fontSize: 15,
        fontFamily: 'time new roman'
    }

    


}));