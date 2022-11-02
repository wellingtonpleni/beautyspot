/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image } from 'react-native';

import theme from '../../styles/theme.json';
import util from '../../util';

import { Box, Text, Touchable } from '../../styles';

const PaymentPicker = () => {
    return (
        <>
            <Text bold hasPadding color="dark">Qual a forma de pagamento?</Text>
            <View style={{paddingHorizontal : 20}}>
                <Touchable
                    height="30px"
                    rounded="5px"
                    background={util.toAlpha(theme.colors.muted, 5)}
                    border={`0.5px solid ${util.toAlpha(theme.colors.muted, 40)}`}
                    align="center"
                    justify="space-between"
                >
                    <Box align="center">
                        <Image
                            source={{
                                uri: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png'
                            }}
                            style={{
                                width: 20,
                                height: 10,
                                marginRight: 10,
                            }}
                        />
                        <Text small>5643 **** **** **** 8976</Text>
                    </Box>
                    <Icon name="cog-outline" color={theme.colors.muted} size={20} />
                </Touchable>
            </View>
        </>
    );
};

export default PaymentPicker;
