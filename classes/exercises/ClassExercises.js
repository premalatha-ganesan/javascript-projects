// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    noOfPages,
    checkedOutTimes,
    discarded
  ) {
    (this.title = title),
      (this.author = author),
      (this.copyrightDate = copyrightDate),
      (this.isbn = isbn),
      (this.noOfPages = noOfPages),
      (this.checkedOutTimes = checkedOutTimes),
      (this.discarded = discarded);
  }
  checkOut(uses = 1) {
    this.checkedOutTimes += uses;
    return `No of times the book checked out : ${this.checkedOutTimes}`;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    noOfPages,
    checkedOutTimes,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      noOfPages,
      checkedOutTimes,
      discarded
    );
  }
  verifyToDiscardBook(currentYear) {

    if (currentYear - this.copyrightDate > 5) {
      this.discarded = "Yes";
      return `Whether '${this.title}' needs to be discarded : ${this.discarded}`;
    }
    else {
        this.discarded = 'No';
        return `Whether '${this.title}' needs to be discarded : ${this.discarded}`;

    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    noOfPages,
    checkedOutTimes,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      noOfPages,
      checkedOutTimes,
      discarded
    );
  }
 discardBook() {
    if (this.checkedOutTimes > 100) {
      this.discarded = "Yes";
      return `Whether '${this.title}' needs to be discarded : ${this.discarded}`;
    }
    else {
        this.discarded = 'No';
        return `Whether '${this.title}' needs to be discarded : ${this.discarded}`;

    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111' , 432, 32,'No');
let manual1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
console.log(novel1.checkOut(5));
console.log(novel1.discardBook());
console.log(manual1.verifyToDiscardBook(2024));