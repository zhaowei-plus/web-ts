module.exports = {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env", {
      "modules": false
    }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "jsx-control-statements",
    [
      "babel-plugin-tcon",
      {
        "libPath": "style/tcon"
      }
    ]
  ]
}
