/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Box, Touchable, Cover, Button } from '../../styles';
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { updateAgendamento, filterAgenda } from '../../store/modules/salao/actions';

const Servico = ({servicos}) => {

    const dispatch = useDispatch();

    return (
        <Touchable
            height="100px"
            hasPadding
            background="light"
            align="center"
            onPress={() => {
                dispatch(updateAgendamento({servicoId: servicos._id}));
                dispatch(filterAgenda());
            }}
        >
            <Cover image="https://salaovirtual.org/wp-content/uploads/2022/02/Corte-no-ombro.jpg"/>
            <Box direction="column">
                <Text bold color="dark">{servicos?.titulo}</Text>
                <Text small>R$ {servicos?.preco} • {moment(servicos?.duracao).format('HH:mm')} mins</Text>
            </Box>
            <Box>
                <Button
                    icon="clock-check-outline"
                    background="primary"
                    mode="contained"
                    >Agendar
                </Button>
            </Box>
        </Touchable>
    );
};

export default Servico;
