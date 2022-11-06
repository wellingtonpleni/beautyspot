/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { useDispatch } from 'react-redux';
import {getSalao} from '../../store/modules/salao/actions';

import Header from '../../components/Header';
import Servico from '../../components/Servico';
import ModalAgendamento from '../../components/ModalAgendamento';

import theme from '../../styles/theme.json';
import util from '../../util';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSalao());
    }, []);

    return (
        <>
            <FlatList
                style={{
                    backgroundColor: util.toAlpha(theme.colors.muted, 10),
                }}
                ListHeaderComponent={Header}
                data={['a', 'b', 'c', 'd', 'e']}
                renderItem={({ item }) => (<Servico key={item} />)}
                keyExtractor={(item) => item}
            />
            <ModalAgendamento />
        </>
    );
};

export default Home;
