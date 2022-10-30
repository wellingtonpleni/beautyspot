/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Title, Spacer, Box, Cover } from '../../styles';
import theme from '../../styles/theme.json';
import util from '../../util';

const Resume = () => {
    return (
        <Box align="center" hasPadding background={util.toAlpha(theme.colors.muted, 5)}>
            <Cover width="80px" height="80px" image="https://s3.sa-east-1.amazonaws.com/object.belezanaweb.com.br/loucas/wordpress/prod/sites/1/2022/04/19102656/img-galeria_mais-longo-melhor_5.jpg" />
            <Box direction="column">
                <Title small>Corte de cabelo</Title>
                <Spacer size="4px"/>
                <Text small>Total: R$ 60,00</Text>
            </Box>
        </Box>
    )
};

export default Resume;