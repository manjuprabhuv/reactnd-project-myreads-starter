export const bookShelfs = {
    move:"Move to...",
    currentlyReading:"Currently Reading",
    wantToRead:"Want to Read",
    read:"Read",
    none:"None"
}

export const bookSelfLookup=(bookShelKey)=>{
    return bookShelfs[bookShelKey];
}


export const getBookAuthor =(authorList)=>{
    let authors="";
   
    if ( typeof(authorList) !== "undefined" && authorList !== null ){
        authorList.forEach((author,i) => {
        
            
            if(i>1&&i<=authorList.length-1){
                authors= authors.concat(" & ").concat(author)
            }else if(i>=1){
                authors=authors.concat(" , ").concat(author);
            }else{
                authors=authors.concat(author);
            }
        });
    }
    return authors;
}

export const updateBookShelf=(currentCatagory,newCatagory,bookShelf,book)=>{
    if(newCatagory!==currentCatagory){//if catagory has book ID and iteratorcatagory is not new catagory
       
        bookShelf= new Set([...bookShelf].filter((item)=>{
          return item.id!==book.id;
        })); 
       
      }else{
         
        bookShelf.add(book);
      }
      return bookShelf;
    
    
}

export const catagorizeBooks=(books)=>{
    //this.allBooks = books;
    let currentlyReading = new Set();
    let wantToRead=new Set();
    let read=new Set();
    let usersBooks = new Map();
    books.forEach(book => {
        usersBooks.set(book.id,book);
      switch(book.shelf){
        case "currentlyReading": currentlyReading.add(book.id)
        break;
        case "read":read.add(book.id)
        break
        case "wantToRead":wantToRead.add(book.id)
        break
        default :console.log("default case... nothing to do")
        break;
      }
    });
    let catagorizedBooks = {
      currentlyReading:currentlyReading,
      wantToRead:wantToRead,
      read:read
    }
    

    return {catagorizedBooks,usersBooks};
    
}

 
