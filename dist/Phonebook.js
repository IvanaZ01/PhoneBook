function Phonebook(){
    this.contacts = [];

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
        localStorage.getItem('contacts') ? this.contacts = JSON.parse(localStorage.getItem('contacts')) : this.contacts = [];
    }
}

function Contact(photo, fullname, number, index){
    this.photo = photo
    this.fullname = fullname;
    this.number = number
    this.index = index
}