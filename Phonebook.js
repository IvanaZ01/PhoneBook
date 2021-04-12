function Phonebook(){
    this.contacts = [
        {
            photo:'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.6435-9/117064867_3464526440248500_1356741735756865836_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=EfbNuCSn7kQAX9x6p0S&_nc_ht=scontent.fbeg4-1.fna&oh=dceb6cbfb0021ae50f8d8c0a43aeab6a&oe=6097EE0E',
            fullname: 'Ivana Zirojevic',
            number: '065154562',
            index: 0
        },
        {
            photo: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            fullname: 'John Doe',
            number: '555 555',
            index: 1
        },
        {
            photo: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t31.18172-8/29745203_819821768203735_6363230208369995861_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6m2gSfOWmnYAX81TBXt&_nc_ht=scontent.fbeg4-1.fna&oh=f9c1beb935fd3615c4ea6b17b8afbed6&oe=609A23D8',
            fullname: 'Aleksandar Pojuzina',
            number: '065 197 640',
            index: 2
        },
        {
            photo:'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            fullname: 'Dr Jones',
            number: '123 123 123',
            index: 3

        }
    ];

    this.addContact = function(photo, fullname, image){
        const index = this.contacts.length;
        this.contacts.push(new Contact(photo, fullname, image, index))
        save(this.contacts)
    }

    this.removeContact = function(index){
        this.contacts.splice(index, 1)
        save(this.contacts)
    }

    let save = function(arr) {
        localStorage.setItem('contacts', JSON.stringify(arr)) 
    }

    this.setLocal = function() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts))
    }

    this.getLoc = function() {
        console.log(localStorage.getItem('contacts'));
        localStorage.getItem('contacts') ? this.contacts = JSON.parse(localStorage.getItem('contacts')) : this.contacts = [];
    }
}

function Contact(photo, fullname, number, index){
    this.photo = photo
    this.fullname = fullname;
    this.number = number
    this.index = index
}