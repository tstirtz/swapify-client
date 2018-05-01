module.exports = {
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
       "promise/catch-or-return": "error",
    },
    "plugins": [
        "react",
         "jsx-a11y",
         "babel"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
