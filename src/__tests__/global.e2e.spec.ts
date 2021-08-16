import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('E2E Tests (Global)', () => {
  test('should return 200 from health endpoint', async (done) => {
    const res = await request.get('/health')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ isAlive: true })
    done()
  })
})
