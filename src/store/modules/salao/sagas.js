/* eslint-disable prettier/prettier */
import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import moment from 'moment';
import api from '../../../services/api';
import types from './types';
import consts from '../../../consts';
import util from '../../../util';
import {
    updateAgenda,
    updateAgendamento,
    updateSalao,
    updateServicos,
    updateColaboradores,
    updateForm,
} from './actions';

export function* getSalao() {
    try {
        const { data: res} = yield call(api.get, `/salao/${consts.salaoId}`);

        if (res.error) {
            // eslint-disable-next-line no-alert
            alert(res.message);
            return false;
        }

        yield put(updateSalao(res.salao));

    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
    }
}

export function* allServicos() {
    try {
        const { data: res} = yield call(api.get, `/servico/salao/${consts.salaoId}`);

        if (res.error) {
            // eslint-disable-next-line no-alert
            alert(res.message);
            return false;
        }

        yield put(updateServicos(res.servicos));

    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
    }
}

export function* filterAgenda() {
    try {
        const {agendamento} = yield select(state => state.salao);

        const { data: res} = yield call(api.post, '/agendamento/dias-disponiveis', {
            ...agendamento,
            data: moment().format('YYYY-MM-DD'),
        });

        if (res.error) {
            // eslint-disable-next-line no-alert
            alert(res.message);
            return false;
        }

        yield put(updateAgenda(res.agenda));
        yield put(updateColaboradores(res.colaboradores));

        const {horariosDisponiveis, data, colaboradorId} = yield call(util.selectAgendamento, res.agenda);
        yield put(updateAgendamento({
            data: moment(`${data}T${horariosDisponiveis[0][0]}`).format(),
            colaboradorId,
        }));
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
    }
}

export function* saveAgendamento() {
    try {
        yield put(updateForm({agendamentoLoading: true}));

        const {agendamento} = yield select(state => state.salao);
        const { data: res} = yield call(api.post, '/agendamento', agendamento);

        if (res.error) {
            // eslint-disable-next-line no-alert
            alert(res.message);
            return false;
        }

        yield put(updateForm({agendamentoLoading: false}));
        // eslint-disable-next-line no-alert
        alert('Agendado com sucesso!');
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
    }
}

export default all([
    takeLatest(types.GET_SALAO, getSalao),
    takeLatest(types.ALL_SERVICOS, allServicos),
    takeLatest(types.FILTER_AGENDA, filterAgenda),
    takeLatest(types.SAVE_AGENDAMENTO, saveAgendamento),
]);
