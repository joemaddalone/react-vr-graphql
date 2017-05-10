
import { StyleSheet } from 'react-vr'
const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        width: 4,
        alignItems: 'stretch'
    },
    zpanel: {
        position: 'absolute'
    },
    closeButton: {
        margin: 0.1,
        height: 0.3,
        width: 0.6,
        backgroundColor: 'white',
        flex: 1
    },
    closeButtonText: {
        fontSize: 0.2,
        textAlign: 'center',
        color: 'black'
    },
    menuButton: {
        margin: 0.05,
        borderColor: 'white',
        borderWidth: 0.01
    },
    menuButtonText: {
        fontSize: 0.2,
        textAlign: 'center'
    },
    detailPanel: {
        width: 4,
        marginTop: 0,
        padding: 0.05
    },
    detailPanelView: {
        padding: 0.05,
        backgroundColor: 'black'
    },
    dataItems: {
       borderColor: 'white',
        borderWidth: 0.01 
    },
    dataLabel: {
        fontSize: 0.1,
        color: 'white',
        marginBottom: 0,
        paddingBottom: 0
    },
    dataValue: {
        fontSize: 0.2,
        color: 'yellow',
        marginBottom: -0.05,
        paddingBottom: 0
    }
})

export default styles