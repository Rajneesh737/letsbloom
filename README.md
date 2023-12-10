Install required packages:
npm init -y
npm install express mongoose body-parser

Retrieve All Books (Endpoint 1):
Endpoint: GET /api/books
Response Format:
[
  {"id": 1, "title": "Book1", "author": "Author1"},
  {"id": 2, "title": "Book2", "author": "Author2"},
  
]

Add a New Book (Endpoint 2):
Endpoint: POST /api/books
Request Format:
{"title": "New Book", "author": "New Author"}
Response fromat:
{"message": "Book added successfully"}
or
{"message": "Error"}

Update Book Details (Endpoint 3):

Endpoint: PUT /api/books/{id}
Request Format:
{"title": "Updated Title", "author": "Updated Author"}
Response Format:
{"message": "Book updated successfully"}
or
{"error": "Book not found"}





