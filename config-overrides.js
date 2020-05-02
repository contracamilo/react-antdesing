const path = require('path')
const { override, fixBabelImports, addLessLoader } = require('customize-cra');


  module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   
   fixBabelImports('formik-antd', {
    libraryName: 'formik-antd',
    libraryDirectory: 'es',
    style: true,
  }),

   addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    })
 );
