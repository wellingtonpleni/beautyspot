/* eslint-disable prettier/prettier */
import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { Dimensions } from 'react-native';
import ModalHeader from './header';
import Resume from './resume';
import DateTime from './dateTime';
import EspecialistaPicker from './Especialistas';
import { ScrollView } from 'react-native-gesture-handler';
import EspecialistaModal from './Especialistas/modal';
import PaymentPicker from './payment';

import { Box, Button } from '../../styles';

const ModalAgendamento = () => {
    return (
        <BottomSheet
            initialSnap={0}
            snapPoints={[0, 70, Dimensions.get('window').height - 30]}
            renderContent={() => (
                <>
                    <ScrollView
                        stickyHeaderIndices={[0]}
                        style={{backgroundColor: "#FFF",height: "100%"}}>
                        <ModalHeader />
                        <Resume />
                        <DateTime />
                        <EspecialistaPicker />
                        <PaymentPicker />
                        <Box hasPadding>
                            <Button
                                icon="check"
                                background="primary"
                                mode="contained"
                                block
                                uppercase={false}
                            >
                                Confirmar agendamento
                            </Button>
                        </Box>
                    </ScrollView>
                    <EspecialistaModal />
                </>
            )} />
    );
};

export default ModalAgendamento;
