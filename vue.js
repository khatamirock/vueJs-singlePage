
// var app = {

//     data() {


//     }

// };

var navList = {
    data() {

        return {
            activePage: 0,
            page: [
                { link: 'home.html', title: "Home", content: 'homer vaii' },
                { link: 'bout.html', title: "About", content: "bout me!!!!" },
                { link: 'contact.html', title: "Contact", content: "contact me soon!!1" }],
            msg: 'home apge'

        }
    }
};


// Vue.createApp(app).mount('#app');
Vue.createApp(navList).mount('body');