


var app = {
    data() {

        return {
            currentTime: '',
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
    mounted() {
        // Update time every second
        setInterval(() => {
            // Get current time
            const now = new Date();
            let hours = now.getHours();
            let amPm = 'AM';

            // Convert to 12-hour format
            if (hours > 12) {
                hours -= 12;
                amPm = 'PM';
            }

            // Handle midnight and noon
            if (hours === 0) {
                hours = 12;
            } else if (hours === 12) {
                amPm = 'PM';
            }

            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            // Update currentTime data property
            this.currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
        }, 1000);
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
                this.clicked = this.clicked.filter(i => i !== ind);
                `         console.log('baddddd', ind);`
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