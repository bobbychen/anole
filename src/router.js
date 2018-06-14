import React from 'react';
import { Router } from 'dva/router';
import enUS from 'antd/lib/locale-provider/en_US';

import { Layout, LocaleProvider } from 'antd';
import './index.less';

function RouterConfig({ history, app }) {
  return (
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <Layout className="page-wrapper">
          <Layout.Header>
            <div className="container">
              <header>HelloWorld</header>
            </div>
          </Layout.Header>
          <Layout.Content>
            <div className="container">
              <main>
                <div className="main-wrapper">
                  <span>Content</span>
                </div>
              </main>
            </div>

          </Layout.Content>
        </Layout>
      </Router>
    </LocaleProvider>
  );
}


export default RouterConfig;
