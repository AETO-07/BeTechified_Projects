async function run() {
  const base = 'http://localhost:3000'
  const headers = { 'Content-Type': 'application/json' }

  // 1) POST without task -> should fail
  let r = await fetch(base + '/todos', { method: 'POST', headers, body: JSON.stringify({}) })
  console.log('POST missing task ->', r.status, await r.text())

  // 2) POST with task -> create
  r = await fetch(base + '/todos', { method: 'POST', headers, body: JSON.stringify({ task: 'Buy milk' }) })
  console.log('POST create ->', r.status, await r.json())

  // 3) GET all
  r = await fetch(base + '/todos')
  console.log('GET /todos ->', await r.json())

  // 4) GET active
  r = await fetch(base + '/todos/active')
  console.log('GET /todos/active ->', await r.json())

  // 5) GET by id
  const list = await (await fetch(base + '/todos')).json()
  const id = list[0]?.id
  if (!id) return console.log('No id returned')
  r = await fetch(base + `/todos/${id}`)
  console.log(`GET /todos/${id} ->`, await r.json())

  // 6) PUT update
  r = await fetch(base + `/todos/${id}`, { method: 'PUT', headers, body: JSON.stringify({ completed: true }) })
  console.log('PUT ->', await r.json())

  // 7) DELETE
  r = await fetch(base + `/todos/${id}`, { method: 'DELETE' })
  console.log('DELETE ->', await r.json())

  // 8) final list
  r = await fetch(base + '/todos')
  console.log('FINAL /todos ->', await r.json())
}

run().catch(e => { console.error('Test script error:', e) })
