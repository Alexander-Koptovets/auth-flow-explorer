const CracoAliasPlugin = require("craco-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {
                source: "options",
                baseUrl: "./src",
                aliases: {
                    "@components": "components",
                    "@contexts": "contexts",
                    "@pages": "pages",
                },
            },
        },
    ],
    eslint: {
        enable: true,
        mode: "file",
    },
};
