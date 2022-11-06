/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-simple-modal';
import { Dimensions } from 'react-native';

import {Text, Box, Cover, Touchable} from '../../../styles';
import theme from '../../../styles/theme.json';
import util from '../../../util';

const EspecialistasModal = () => {
    return (
        <Modal open={false}>
            <ScrollView>
                <Box hasPadding direction="column">
                    <Text bold color="dark">Corte de cabelo</Text>
                    <Text small>Disponíveis em 29/10/2022 (Dom) às 14:30h</Text>
                    <Box wrap="wrap" spacing="10px 0 0">
                        {[1,2,3,4,5,6,7,8,9,10].map(colaborador => (
                            <Touchable
                                height="70px"
                                spacing="10px 0 0 0"
                                direction="column"
                                align="center"
                                width={(Dimensions.get("screen").width - 100) / 4}
                            >
                                <Cover 
                                    width="45px"
                                    height="45px"
                                    circle
                                    spacing="0 0 5px 0"
                                    border={colaborador === 1 ? `2px solid ${theme.colors.primary}` : 'none'}
                                    image="https://cdn.eutotal.com/imagens/chanel-de-bico.jpg"
                                />
                                <Text small bold>Amanda</Text>
                            </Touchable>
                        ))}
                    </Box>
                </Box>
            </ScrollView>
        </Modal>
    );
};

export default EspecialistasModal;
