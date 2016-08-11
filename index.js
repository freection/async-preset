module.exports = {
    plugins: [
        [require("babel-plugin-transform-async-to-module-method"), {
            "module": "co",
            "method": "wrap"
        }],
        require("babel-plugin-transform-es2015-modules-commonjs"),
        require("babel-plugin-syntax-jsx")
    ]
}
