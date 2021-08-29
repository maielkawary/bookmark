var bookTitle = document.getElementById('BookTitle')
var author = document.getElementById('Author')
var ISBN = document.getElementById('ISBN')


var counter = 0
if (!(localStorage.getItem('books'))){
    localStorage.setItem('books', document.getElementById('books').innerHTML)
}
function adding(){
    var check = Number(ISBN.value)
    if(bookTitle && !(isNaN(check))){
    document.getElementById('books').innerHTML = localStorage.getItem('books') + '<div class="row" id="row"' + counter + '><p id="bt' + counter +'">' + bookTitle.value +'</p><p id="a' + counter +'">' + author.value +'</p><p id="i' + counter +'">' + check +'</p><div class="icons"><i class="bi bi-pencil-square"></i><i class="bi bi-eraser-fill" id="eraser' + counter + '"></i></div></div><hr>' 
    var books = document.getElementById('books').innerHTML
    localStorage.setItem("books", books)
    document.getElementById('eraser'+counter).addEventListener('click',function(){document.getElementById('row'+counter).style.color = 'red'})
    console.log("row"+counter)

    counter++
    }
    else {
        alert('You have to fill in the Book Title and the ISBN must be a number')
    }
}
document.getElementById('books').innerHTML = localStorage.getItem('books')
console.log(localStorage.getItem('books'))
var test = document.getElementById('eraser'+counter)
