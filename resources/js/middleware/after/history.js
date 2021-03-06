import store from '../../store';

const excluded = ['notFound', 'unauthorized', 'touch'];

const qualifies = route => route.name
    && !excluded.includes(route.name)
    && !route.meta.guestGuard;

export default (to) => {
    if (store.state.preferences.global.history && qualifies(to)) {
        store.dispatch('history/push', to);
    }
};
