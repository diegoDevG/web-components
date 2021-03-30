class productCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        this.title = this.getAttribute('title')
        this.collection = this.getAttribute('collection')
        this.price = this.getAttribute('price')
        this.description = this.getAttribute('description')
        this.img = this.getAttribute('img')
        this.ctabtn = this.getAttribute('ctabtn')
    }

    getTemplate = () => {
        const template = document.createElement("template");
        template.innerHTML = /*html*/` 
        <div class="product-card">
            <div class="media-box">
                <img src="${this.img}" alt="${this.title}">
            </div>
            <div class="product-details">
            <h3 class="product-title">${this.title}</h3>
            <h2 class="product-collection">${this.collection}</h2>            
            <p class="product-description">${this.description}</p>
            <div class="footer-card">
                <span class="product-price">${this.price}</span>
                <button>${this.ctabtn}</button>
            </div>
            </div> 
        </div>
        ${this.getStyles()}   
        `
        return template
    }

    getStyles() {
        const styles =  /*css*/`
        <style>            

            :host {
                /*colors*/
                --primary-color: black;
                --secondary-color: #a2a2a2;
                --primary-background: #5a6cb2;

                /*spacing*/
                --layout-col-gap: 24px;
                --padding-md: 40px;

                /*fonts*/
                --title-size: 2rem;
                --price-size: 2rem;
            }

            *{
                margin: 0;
                padding: 0;
            }
            
            img {
                width: 100%;
                position: relative;
                bottom: -80px;
            }

            button {
                padding: 12px;
                border: 0;
                background: #5a6cb2;
                color: white;
                font-size: 1.2rem;
                border-radius: 5px;
            }

            .product-card{
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 24px;
                background: white;
            }
            

            button:hover{
                background: #485896;
            }

            .media-box {
                background-color: var(--primary-background);
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                min-width: 320px;
                flex: 1;

            }     

            .media-box:before{
                position: absolute;
                top: 20%;
                left: 20%;
                font-size: 4rem;
                font-weight: 800;
                color: #000;
                content: 'Nike';
                opacity: 0.1;
            }

            .product-title{
                font-size: var(--title-size);
            }

            .product-collection{
                color: var(--secondary-color);
                font-size: 1.2rem;
            }

            .product-details {
                color: var(--primary-color);
                padding: var(--layout-col-gap); 
                padding-top: 80px; 
                min-width: 320px;
                flex: 1;
            }

            .product-description{
                padding-top: 24px;
            }

            .product-price {
                color: var(--secondary-color);
                font-size: var(--price-size);
                font-weight: 800;
            }

            .footer-card{
                display: flex;
                justify-content: space-between;
                padding-top: 24px;
            }

            @media (min-width: 560px){
                .product-details {                   
                    padding-top: 40px; 
                    
                }
            }

        </style>
       `
        return styles

    }


    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

}

customElements.define("product-card", productCard);