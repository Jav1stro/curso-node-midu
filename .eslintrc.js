module.exports = {
  // Otras configuraciones...
  overrides: [
    {
      files: ['*.js', '*.ts'],
      extends: 'eslint-config-standard-with-typescript',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    // Otras reglas...

    // Configuración específica para permitir paréntesis sin espacio antes de una función
    'space-before-function-paren': ['error', 'never'],
  },
}
