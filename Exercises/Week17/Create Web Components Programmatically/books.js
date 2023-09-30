// Create a class for the element
class Book extends HTMLElement {
    constructor() {
        super();
    }

    set book(book){
        this.innerHTML = `
            <div class="card">
              <h5 class="card-header">${book.title}</h5>
              <div class="card-body">
                <h5>${book.subtitle}</h5>
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-success font-weight-bold">Title:</td>
                            <td>${book.title}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Subtitle:</td>
                            <td>${book.subtitle}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Author:</td>
                            <td>${book.author}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Publisher:</td>
                            <td>${book.publisher}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Description:</td>
                            <td>${book.description}</td>
                        </tr>
                    </table>
                    </p>
              </div>
            </div>
    `;    

  }
}

// Define the new element
customElements.define('mit-book', Book);
