/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Title, Text, Touchable } from '../../styles';
import util from '../../util';
import theme from '../../styles/theme.json';

import { FlatList } from 'react-native-gesture-handler';

const dateTime = () => {
    return (
        <>
            <Text bold color="dark" hasPadding>Quando você gostaria de agendar?</Text>
            <FlatList
                data={['a', 'b', 'c', 'd', 'e', 'f']}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{
                    paddingLeft: 20
                }}
                renderItem={({ item }) => (
                    <Touchable
                        key={item}
                        width="70px"
                        height="80px"
                        spacing="0 10px 0 0"
                        rounded="10px"
                        direction="column"
                        justify="center"
                        align="center"
                        background={item == 'a' ? 'primary' : 'light'}
                        border={`1px solid ${item === 'a' ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
                    >
                        <Text small colors={item === 'a' ? 'light' : undefined}>Dom</Text>
                        <Title small colors={item === 'a' ? 'light' : undefined}>29</Title>
                        <Text small colors={item === 'a' ? 'light' : undefined}>Outubro</Text>
                    </Touchable>
                )}
            />
            <Text bold color="dark" hasPadding>Qual horário?</Text>
            <FlatList
                data={[
                    ['14:30', '15:00'],
                    ['15:30', '16:00'],
                    ['16:30', '17:00'],
                    ['17:30'],
                ]}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20
                }}
                renderItem={({ item }) => (
                    <Box direction="column" spacing="0 10px 0 0">
                        {item.map(horario => (
                            <Touchable
                                key={horario}
                                width="100px"
                                height="35px"
                                spacing="0 0 5px 0"
                                rounded="7px"
                                direction="column"
                                justify="center"
                                align="center"
                                background={horario === '14:30' ? 'primary' : 'light'}
                                border={`1px solid ${horario === 'a' ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
                            >
                                <Text colors={horario === '14:30' ? 'light' : undefined}>{horario}</Text>
                            </Touchable>
                        ))}
                    </Box>
                )}
            />
        </>
    );
};

export default dateTime;