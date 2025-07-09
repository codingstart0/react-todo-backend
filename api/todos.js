let todos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build Todo App', completed: true },
  { id: 3, title: 'Deploy Backend', completed: false },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
