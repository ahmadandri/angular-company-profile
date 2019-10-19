var url = "src/app/data-example/"
export const GlobalVariable = Object.freeze({
    SERVER_URL: {
        base_api : url
    },
    Home:{
        GetAllImage: url + "/image-slider.json"
    },
    Article:{
        GetAll:url + "/article.json",
        GetById: url + "/article.json"
    },
    Product:{
        GetAll:url + "/product.json",
        GetById:url + "/product.json"
    },
    AboutUs:{
        GetAll: url + "/about-us.json",
    },
    ContactUs:{
        GetAll:url + "/contact-us.json"
    }
});