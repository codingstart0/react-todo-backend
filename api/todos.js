let todos = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Finish React project', completed: false },
  { id: 4, title: 'Read a book', completed: false },
  { id: 5, title: 'Call mom', completed: true },
  { id: 6, title: 'Pay bills', completed: false },
  { id: 7, title: 'Clean the kitchen', completed: true },
  { id: 8, title: 'Practice coding', completed: false },
  { id: 9, title: 'Update resume', completed: false },
  { id: 10, title: 'Workout for 30 mins', completed: true },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
