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
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveAgendamento } from '../../store/modules/salao/actions';
import { Box, Button, Title, Text } from '../../styles';
import theme from '../../styles/theme.json';
import util from '../../util';
import moment from 'moment';

const ModalAgendamento = () => {
    const dispatch = useDispatch();

    const { form, agendamento, servicos, agenda, colaboradores } = useSelector(state => state.salao);
    const dataSelecionada = moment(agendamento.data).format('YYYY-MM-DD');
    const horaSelecionada = moment(agendamento.data).format('HH:mm');

    const { horariosDisponiveis, colaboradoresDia } = util.selectAgendamento(agenda, dataSelecionada, agendamento.colaboradorId);
    const sheetRef = React.useRef(null);
    const servico = servicos.filter(s => s._id === agendamento.servicoId)[0];

    const setSnap = (snapIndex) => {
        sheetRef.current.snapTo(snapIndex);
    };

    useEffect(() => {
        if (form.modalAgendamento) {
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
                        style={{ backgroundColor: "#FFF", height: "100%" }}>
                        <ModalHeader />
                        <Resume servico={servico} />
                        {agenda.length > 0 &&
                            <>
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
                            </>}

                            {agenda.length === 0 && (
                                <Box
                                    height={Dimensions.get('window').height - 200}
                                    background="light"
                                    direction="column"
                                    hasPadding
                                    justify="center"
                                    align="center"
                                >
                                    <ActivityIndicator
                                        size="large"
                                        color={theme.colors.primary}
                                    />
                                    <Title align="center">Por favor, aguarde...</Title>
                                    <Text small align="center">Estamos buscando os melhores horários!</Text>
                                </Box>
                            )}

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
