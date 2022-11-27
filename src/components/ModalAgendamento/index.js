/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { Dimensions } from 'react-native';
import ModalHeader from './header';
import Resume from './resume';
import DateTime from './dateTime';
import EspecialistaPicker from './Especialistas';
import { ScrollView } from 'react-native-gesture-handler';
import EspecialistaModal from './Especialistas/modal';
import PaymentPicker from './payment';

import { useSelector, useDispatch } from 'react-redux';
import { saveAgendamento } from '../../store/modules/salao/actions';
import { Box, Button } from '../../styles';
import util from '../../util';
import moment from 'moment';

const ModalAgendamento = () => {
    const dispatch = useDispatch();

    const {form, agendamento, servicos, agenda, colaboradores} = useSelector(state => state.salao);
    const dataSelecionada = moment(agendamento.data).format('YYYY-MM-DD');
    const horaSelecionada = moment(agendamento.data).format('HH:mm');

    const {horariosDisponiveis, colaboradoresDia} = util.selectAgendamento(agenda, dataSelecionada, agendamento.colaboradorId);
    const sheetRef = React.useRef(null);
    const servico = servicos.filter(s => s._id === agendamento.servicoId)[0];

    const setSnap = (snapIndex) => {
        sheetRef.current.snapTo(snapIndex);
    };

    useEffect(() => {
        if (form.modalAgendamento){
            setSnap(form.modalAgendamento);
        }
    }, [form.modalAgendamento]);

    return (
        <BottomSheet
            ref={sheetRef}
            initialSnap={0}
            snapPoints={[0, 70, Dimensions.get('window').height - 30]}
            renderContent={() => (
                <>
                    <ScrollView
                        stickyHeaderIndices={[0]}
                        style={{backgroundColor: "#FFF",height: "100%"}}>
                        <ModalHeader />
                        <Resume servico={servico}/>
                        <DateTime
                            servico={servico}
                            servicos={servicos}
                            agendamento={agendamento}
                            agenda={agenda}
                            dataSelecionada={dataSelecionada}
                            horaSelecionada={horaSelecionada}
                            horariosDisponiveis={horariosDisponiveis}
                        />
                        <EspecialistaPicker
                            colaboradores={colaboradores}
                            agendamento={agendamento}
                        />
                        <PaymentPicker />
                        <Box hasPadding>
                            <Button
                                loading={form.agendamentoLoading}
                                disabled={form.agendamentoLoading}
                                icon="check"
                                background="primary"
                                mode="contained"
                                block
                                uppercase={false}
                                onPress={() => dispatch(saveAgendamento())}
                            >
                                Confirmar agendamento
                            </Button>
                        </Box>
                    </ScrollView>
                    <EspecialistaModal
                        form={form}
                        colaboradores={colaboradores}
                        agendamento={agendamento}
                        servicos={servicos}
                        horaSelecionada={horaSelecionada}
                        colaboradoresDia={colaboradoresDia}
                    />
                </>
            )} />
    );
};

export default ModalAgendamento;
