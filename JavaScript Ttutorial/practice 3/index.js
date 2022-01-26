console.log('This JS is for practice3')

class library{
    constructor(booklist){
        this.booklist = booklist
        this.issuedbooks = {}
    }
    getbooklist(){
        this.booklist.forEach(element => {
            console.log(element)
        });
    }

    issuebook(bookname,user){
          this.issuedbooks.push[bookname, user] = user
    }

    returnbook(bookname){
        delete this.issuedbooks[bookname]
    }
}
















