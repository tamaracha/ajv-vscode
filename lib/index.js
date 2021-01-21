' use strict'
const defaultSnippetsSchema = require('./default-snippets.schema.json')

module.exports = function vscodePlugin (ajv) {
  return ajv
    .addKeyword({
      keyword: 'markdownDescription',
      schemaType: 'string',
      valid: true
    })
    .addKeyword({
      keyword: 'defaultSnippets',
      metaSchema: defaultSnippetsSchema,
      valid: true
    })
}
