const CracoLessPlugin = require('craco-less');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#FFF5D0',
              '@secondary-color': '#c4d7e2',
              '@primary-font-size': '1rem',
              '@secondary-font-size': '.75rem'
              },
            javascriptEnabled: true,
          }
        },
      },
    },
  ],
};

