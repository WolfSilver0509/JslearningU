const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('.book-form');

class Book{
    constructor(titre,auteur,annee){
        this.titre=titre;
        this.auteur=auteur;
        this.annee=annee;
    }
    addBookToList(book){
        const row=document.createElement('tr');

        row.innerHTML =`
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class="delete">X</button></td>
        `;

        bookList.appendChild(row);
    }
}

bookForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;


    const book = new Book(titre,auteur,annee);

    book.addBookToList(book);
})