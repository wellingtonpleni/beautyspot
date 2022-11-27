/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Linking, Share } from 'react-native';
import {
    Cover,
    GradientView,
    Title,
    Text,
    Badge,
    Box,
    Touchable,
    Button,
    TextInput,
} from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme.json';

import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from '../../store/modules/salao/actions';

const Header = () => {
    const dispatch = useDispatch();
    const {salao, servicos} = useSelector(state => state.salao);

    return (
        <>
            <Cover
                image= {salao.capa}
                width={Dimensions.get('window').width}
                height="300px"
            >
                <GradientView
                    colors={['#21232F33', '#21232FE6']}
                    hasPadding
                    justify="flex-end"
                >
                    <Badge colors={salao.isOpened ? 'success' : 'danger'}>{salao.isOpened ? 'Aberto' : 'Fechado'}</Badge>
                    <Title colors="light">{salao.nome}</Title>
                    <Text colors="light">{salao?.endereco?.cidade} • {salao?.distance}km</Text>
                </GradientView>
            </Cover>
            <Box
                background="light"
                align="center"
               >
                <Box hasPadding justify="space-between">
                    <Touchable 
                        width="50px"
                        direction="column"
                        align="center"
                        spacing="0px 10px 0 0"
                        onPress={()=> Linking.openURL(`tel:${salao.telefone}`)}
                        >
                        <Icon name="phone" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Ligar</Text>
                    </Touchable>

                    <Touchable
                        width="50px"
                        direction="column"
                        align="center"
                        onPress={() => {Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${salao?.geo?.coordinates[0]}, ${salao?.geo?.coordinates[1]}`)}}
                        >
                        <Icon name="map-marker" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Visitar</Text>
                    </Touchable>

                    <Touchable
                        width="50px"
                        direction="column"
                        align="center"
                        onPress={() => {
                            Share.share({
                                message: `${salao.nome}`,
                            });
                        }}
                        >
                        <Icon name="share" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Enviar</Text>
                    </Touchable>
                </Box>
                <Box hasPadding direction="column" align="center" justify="center">
                    <Button
                        icon="clock-check-outline"
                        background="primary"
                        mode="contained"
                        uppercase={false}
                    >Agendar Agora</Button>
                    <Text small spacing="10px 0 0">Horários disponíveis</Text>
                </Box>
            </Box>
            <Box hasPadding direction="column" background="light" spacing="10px 0 0">
                <Title small>Serviços ({servicos.length})</Title>
                <TextInput
                    placeholder="Digite o nome do serviço"
                    onChangeText={(value) => dispatch(updateForm({ inputFiltro: value }))}
                    onFocus={() => dispatch(updateForm({ inputFiltroFoco: true }))}
                    onBlue={() => dispatch(updateForm({ inputFiltroFoco: false }))}
                />
            </Box>
        </>
    )
};

export default Header;
