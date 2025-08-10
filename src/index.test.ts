import { describe, it, expect } from 'vitest'
import { SELF } from 'cloudflare:test'

describe('大相撲アプリ', () => {
  it('/ にアクセスすると200が返る', async () => {
    const res = await SELF.fetch('https://example.com/')
    expect(res.status).toBe(200)
  })

  it('HTMLに大相撲番付表のタイトルが含まれる', async () => {
    const res = await SELF.fetch('https://example.com/')
    const html = await res.text()
    expect(html).toContain('大相撲番付表')
  })

  it('HTMLに力士の名前が表示される', async () => {
    const res = await SELF.fetch('https://example.com/')
    const html = await res.text()
    expect(html).toContain('照ノ富士')
    expect(html).toContain('貴景勝')
  })

  it('/api/rikishi でJSONが返る', async () => {
    const res = await SELF.fetch('https://example.com/api/rikishi')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toContain('application/json')
  })

  it('/api/rikishi で力士データが返る', async () => {
    const res = await SELF.fetch('https://example.com/api/rikishi')
    const data = await res.json()

    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)

    // 最初の力士のデータ構造をチェック
    const firstRikishi = data[0]
    expect(firstRikishi).toHaveProperty('name')
    expect(firstRikishi).toHaveProperty('rank')
    expect(firstRikishi).toHaveProperty('wins')
    expect(firstRikishi).toHaveProperty('losses')
  })

  it('存在しないパスは404を返す', async () => {
    const res = await SELF.fetch('https://example.com/nonexistent')
    expect(res.status).toBe(404)
  })
})
