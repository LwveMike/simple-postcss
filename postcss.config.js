const postCssImport = 'postcss-import';
const cssNano = 'cssnano';
const autoPrefixer = 'autoprefixer';
const postCssPresetEnv = 'postcss-preset-env';
const postCssNormalize = 'postcss-normalize';
const postCssSimpleVars = 'postcss-simple-vars';


module.exports = {
    plugins: [
        require(postCssImport),
        require(cssNano),
        require(autoPrefixer),
        require(postCssPresetEnv)({ stage: 1 }),
        require(postCssNormalize),
        require(postCssSimpleVars)
    ]
}