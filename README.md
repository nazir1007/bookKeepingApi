## BOOK KEEPING API ASSIGNMENT

# Project Overview

Build a bookkeeping service where there are three models namely Books, Users, and Libraries.
A User can either be an Author or a Borrower; a Book is written by some User (Author), is
currently owned by a certain library, and is currently borrowed by a certain user (Borrower).

# Books:

 GET /api/books – Retrieve a list of all books

 GET /api/books/:id – Retrieve details of a specific book by its ID — API should include the details of the Library, Author and Borrower associated with the Book.
 
 POST /api/books – Create a new book entry
 
 PUT /api/books/:id – Update details of a specific book by its ID
 
 DELETE /api/books/:id – Delete a book by its ID

 
# Users:

POST /api/users/register – Register a new user (both authors and borrowers)

POST /api/users/login – Authenticate user and generate JWT token


# Borrowing:

POST /api/borrow – Borrow a book against a charge

PUT /api/return/:id – Return a borrowed book by its ID


# Libraries:

GET /api/libraries – Retrieve a list of all libraries

GET /api/libraries/:id – Retrieve details of a specific library by its ID — API should include the details of
                         all the Books owned by the Library, each Book object should include the details of the Borrower.
                         
POST /api/libraries – Create a new library

PUT /api/libraries/:id – Update details of a specific library by its ID

DELETE /api/libraries/:id – Delete a library by its ID


# Library Inventory:

GET /api/libraries/:id/inventory – Retrieve a list of books available in a specific library

POST /api/libraries/:id/inventory – Add a book to the inventory of a specific library

DELETE /api/libraries/:id/inventory/:bookId – Remove a book from the inventory of a specific library by its ID


## Version

- node - v20.17.0,
- express: v5.1.0,
- mongoose: v8.13.2,
- cors: v2.8.5,
- dotenv: v16.5.0,
- bcryptjs: v3.0.2,
- i18next": v25.0.1,
- i18next-fs-backend: v2.6.0,
- i18next-http-middleware: v3.7.4,
- jsonwebtoken: v9.0.2,
- multer": v1.4.5-lts.2

## created_at

25 APR 2025
