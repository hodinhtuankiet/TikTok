const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      alias: {
        '@': './src', // Change this to the correct path
      },
    },
  ],
];
