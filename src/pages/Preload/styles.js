/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.json';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : theme.colors.light,
    },
    logo : {
        display: 'flex',
        alignSelf: 'center',
        width: '100%',
        height: 400,
    },
    indicator : {
        marginTop: 30,
    },
});

export default styles;
