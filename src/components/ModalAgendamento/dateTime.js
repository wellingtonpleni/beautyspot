/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Title, Text, Touchable } from '../../styles';
import moment from 'moment/min/moment-with-locales';
import { useDispatch } from 'react-redux';

import {updateAgendamento} from '../../store/modules/salao/actions';
import util from '../../util';
import theme from '../../styles/theme.json';
import { FlatList } from 'react-native-gesture-handler';

moment.locale('pt-br');

const DateTime = ({
    servico,
    agenda,
    dataSelecionada,
    horaSelecionada,
    horariosDisponiveis,
}) => {
    const dispatch = useDispatch();

    const setAgendamento = (value, isTime = false) => {
        const { horariosDisponiveis } = util.selectAgendamento(agenda, isTime ? dataSelecionada : value);
        let data = !isTime ? `${value}T${horariosDisponiveis[0][0]}` : `${dataSelecionada}T${value}`;
        dispatch(updateAgendamento({data}));
    }

    return (
        <>
            <Text bold color="dark" hasPadding>Quando você gostaria de agendar?</Text>
            <FlatList
                data={agenda}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{
                    paddingLeft: 20
                }}
                renderItem={({ item }) => {
                    const date = moment(Object.keys(item)[0]);
                    const dateISO = moment(date).format('YYYY-MM-DD');
                    const selected = (dateISO === dataSelecionada);

                return (
                    <Touchable
                        key={dateISO}
                        width="70px"
                        height="80px"
                        spacing="0 10px 0 0"
                        rounded="10px"
                        direction="column"
                        justify="center"
                        align="center"
                        background={selected ? 'primary' : 'light'}
                        onPress={() => setAgendamento(dateISO)}
                        border={`1px solid ${selected ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
                    >
                        <Text small colors={selected ? 'light' : undefined}>{util.diasSemana[date.day()]}</Text>
                        <Title small colors={selected ? 'light' : undefined}>{date.format('DD')}</Title>
                        <Text small colors={selected ? 'light' : undefined}>{date.format('MMMM')}</Text>
                    </Touchable>
                )}}
            />
            <Text bold color="dark" hasPadding>Qual horário?</Text>
            <FlatList
                data={horariosDisponiveis}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20
                }}
                renderItem={({ item }) => (
                    <Box direction="column" spacing="0 10px 0 0">
                        {item.map(horario => {
                            const selected = horario === horaSelecionada;

                            return (
                            <Touchable
                                key={horario}
                                width="100px"
                                height="35px"
                                spacing="0 0 5px 0"
                                rounded="7px"
                                direction="column"
                                justify="center"
                                align="center"
                                background={selected ? 'primary' : 'light'}
                                onPress={() => setAgendamento(horario, true)}
                                border={`1px solid ${selected  ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
                            >
                                <Text colors={selected ? 'light' : undefined}>{horario}</Text>
                            </Touchable>
                        )})}
                    </Box>
                )}
            />
        </>
    );
};

export default DateTime;
