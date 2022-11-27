/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Text, Cover, Button } from '../../../styles';
import theme from '../../../styles/theme.json';

import { useDispatch } from 'react-redux';
import {updateForm} from '../../../store/modules/salao/actions';

const EspecialistaPicker = ({colaboradores, agendamento}) => {

    const dispatch = useDispatch(); 
    const colaborador = colaboradores.filter(c => c._id === agendamento.colaboradorId)?.[0];

    return (
        <>
            <Text bold color="dark" hasPadding>Gostaria de trocar o(a) especialista?</Text>
            <Box align="center" spacing="0 20px 0" removePaddingBottom>
                <Box align="center">
                    <Cover
                        width="45px"
                        height="45px"
                        circle
                        image={colaborador?.foto}
                    />
                    <Text small>{colaborador?.nome}</Text>
                </Box>
                <Box>
                    <Button
                        uppercase={false}
                        textColor="muted"
                        background={theme.colors.light}
                        mode="contained"
                        onPress={() => dispatch(updateForm({modalEspecialista:true}))}
                    >Trocar Especialista</Button>
                </Box>
            </Box>
        </>
    );
};

export default EspecialistaPicker;
