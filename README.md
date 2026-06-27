# Week 3: CRUD Todo API

This project implements a simple in-memory Todo API to satisfy the assignment requirements.

**Implemented requirements**
- Add all CRUD routes for todos
- GET `/todos/:id` (single read)
- POST validation: `task` field required
- GET `/todos/active` — returns todos where `completed` is not true (array bonus)

**Files of interest**
- [App file/server.js](App file/server.js) — Express server and routes
- [test_todos.js](test_todos.js) — small Node script that exercises the API

**Run locally**
Start the server:

```bash
npm run start-server
```

Run the quick test script (requires Node with `fetch` available):

```bash
node test_todos.js
```

**Endpoints**
- `GET /todos` — list all todos
- `GET /todos/active` — list todos where `completed` is not true
- `GET /todos/:id` — get a single todo by id
- `POST /todos` — create a todo (body must include non-empty `task`)
- `PUT /todos/:id` — update a todo (can update `task` and/or `completed`)
- `DELETE /todos/:id` — remove a todo

**Sample curl commands**

Create (valid):

```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"task":"Buy milk"}'
```

Create (invalid — missing task):

```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{}'
```

Get active todos:

```bash
curl http://localhost:3000/todos/active
```

Get single todo:

```bash
curl http://localhost:3000/todos/1
```

**Submission**
Fork your week3 repo, copy these files, and submit your GitHub link as required by the assignment.
