class Book extends HTMLElement{
    constructor(){
        super();

        const title = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const author = this.getAttribute('author');
        const publisher = this.getAttribute('publisher');
        const description = this.getAttribute('description');

        this.innerHTML = `
            <div class="card">
            <h5 class

        
        `;
        
    }
}


customElements.define('mit-book', Book);