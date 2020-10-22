const knex = require('knex')
const config = require('./knexfile').test

const db = require('./db')
const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

test('check if getCandles function returns candles', () => {
  return db.getCandles(testDb)
    .then((candle) => {
      expect(candle.length).toBe(3)
    })
})


