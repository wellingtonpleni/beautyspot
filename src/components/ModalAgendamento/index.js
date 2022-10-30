/* eslint-disable prettier/prettier */
import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { ScrollView, Dimensions } from 'react-native';
import ModalHeader from './header';
import Resume from './resume';
import DateTime from './dateTime';

const ModalAgendamento = () => {
    return (
        <BottomSheet
            initialSnap={2} 
            snapPoints={[0, 70, Dimensions.get('window').height - 30]} 
            renderContent={() => (
                <ScrollView style={{backgroundColor: "#FFF", height: "100%"}}>
                    <ModalHeader />
                    <Resume />
                    <DateTime />
                </ScrollView>
            )}/>
    );
};

export default ModalAgendamento;