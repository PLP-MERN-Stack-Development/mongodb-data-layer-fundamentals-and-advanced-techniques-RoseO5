use("library");

// 1. Show all books
db.books.find({});

// 2. Find all books by Chimamanda Ngozi Adichie
db.books.find({ author: "Chimamanda Ngozi Adichie" });

// 3. Find books published after 2000
db.books.find({ year: { $gt: 2000 } });

// 4. Sort books by year (newest first)
db.books.find().sort({ year: -1 });

// 5. Count number of books in the collection
db.books.countDocuments();
