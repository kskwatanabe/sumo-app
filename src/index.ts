import { Hono } from 'hono'
import { html } from 'hono/html'

// 力士の型定義
interface Rikishi {
  name: string
  rank: string
  wins: number
  losses: number
}

const app = new Hono()

// シンプルな力士データ
const rikishi: Rikishi[] = [
  { name: '照ノ富士', rank: '横綱東', wins: 12, losses: 3 },
  { name: '貴景勝', rank: '大関東', wins: 10, losses: 5 },
  { name: '豊昇龍', rank: '大関西', wins: 9, losses: 6 },
  { name: '大栄翔', rank: '関脇東', wins: 8, losses: 7 },
  { name: '若元春', rank: '関脇西', wins: 7, losses: 8 }
  { name: '大の里', rank: '横綱西', wins: 11, losses: 4 }
]

app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html>
    <head>
      <title>大相撲番付</title>
      <meta charset="utf-8">
      <style>
        body { font-family: sans-serif; margin: 20px; }
        .rikishi { border: 1px solid #ddd; margin: 10px; padding: 15px; border-radius: 5px; }
        .rank { color: #d4af37; font-weight: bold; }
        .record { color: #666; }
      </style>
    </head>
    <body>
      <h1>🏯 大相撲番付表</h1>
      ${rikishi.map((r: Rikishi) => html`
        <div class="rikishi">
          <h3>${r.name}</h3>
          <div class="rank">${r.rank}</div>
          <div class="record">${r.wins}勝${r.losses}敗</div>
        </div>
      `)}
    </body>
    </html>
  `)
})

app.get('/api/rikishi', (c) => {
  return c.json(rikishi)
})

export default app
