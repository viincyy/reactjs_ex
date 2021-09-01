import fs from 'fs';
import path from 'path';

// Get all book files from books folder
const booksDir = path.join(process.cwd(), 'books');

export const getBooks = () => {
    // Read file
    const bookFileNames = fs.readdirSync(booksDir);
    const bookData = bookFileNames.map((bookFileName) => {
        const fileBookPath = path.join(booksDir, bookFileName);
        const bookContent = fs.readFileSync(fileBookPath, 'utf-8');

        return {
            bookName: bookFileName.replace(/\.txt$/, ''),
            bookContent,
        };
    });
    return bookData;
};
