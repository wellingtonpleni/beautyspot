/* eslint-disable prettier/prettier */
import { takeLatest, all, put, call } from 'redux-saga/effects';

import types from './types';
import api from '../../../services/api';
import consts from '../../../consts';
import { updateSalao } from './actions';

export function* getSalao() {
    try {
        const { data: res} = yield call(api.get, `/salao/${consts.salaoId}`);

        if (res.error) {
            alert(err.message);
            return false;
        }

        yield put(updateSalao(res.salao));

    } catch (err) {
        alert(err.message);
    }
}

export default all([takeLatest(types.GET_SALAO, getSalao)]);
