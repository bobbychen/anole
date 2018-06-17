import dva from 'dva';
import router from './router';
import createHistory from 'history/createBrowserHistory';

const app = dva({
    history: createHistory(),
    }
 );

app.router(router);

app.start('#root');
