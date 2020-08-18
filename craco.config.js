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
              '@secondary-color': '#0F222D'
              },
            javascriptEnabled: true,
          }
        },
      },
    },
  ],
};

