


var app = {
    data() {

        return {
            activePage: 0,
            isDark: false,
            theme: 'light',
            note: '',
            noteCol: 'lired',
            clicked: [],
            notes: [],
            page: [
                { link: 'home.html', title: "Home", content: 'homer vaii' },
                { link: 'bout.html', title: "About", content: "bout me!!!!" },
                { link: 'contact.html', title: "Contact", content: "contact me soon!!1" }],
            msg: 'home apge'

        }
    },
    methods: {
        kire: function () {
            alert('vaii revii')
        },
        changeTheme: function () {
            this.theme = this.theme == 'light' ? 'dark' : 'light'
        },
        notesave: function (msg) {

            if (this.note != '') {
                // alert(`Save Note: ${}`);
                this.notes.push(this.note);
                this.note = '';
            }
            else { alert('cant be empty'); }

        },
        makegreen: function (ind) {
            if (!this.clicked.includes(ind)) { this.clicked.push(ind); }
            else {
                this.clicked.splice(ind - 1, 1);
                // console.log('baddddd', ind);
            }
            console.log(this.clicked);
            // this.noteCol = this.noteCol == 'lired' ? 'ligreen' : 'lired';
        }

    }



};


// Vue.createApp(app).mount('#app');
app = Vue.createApp(app)

app.component('page-body',
    {
        props: ['page'],
        template: `   <h1> {{page.title}} Page !!</h1>
                     <p>{{page.content}}</p>`
    }
)


app.mount('body');