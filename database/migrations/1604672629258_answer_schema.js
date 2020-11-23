'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
