module.exports = {
    "env": {
      "browser": true,
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
      "no-console": "warn",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/require-default-props": [0, { forbidDefaultForRequired: false }],
       // "promise/catch-or-return": "error",
       "jsx-a11y/anchor-is-valid": [ "off", {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }]
    },
    "plugins": [
        "react",
         "jsx-a11y",
         "babel",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
