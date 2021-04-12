const phoneBook = new Phonebook();
const saveBtn = document.querySelector('#saveBtn');
const container = document.querySelector('.containerr')
const details = document.querySelector('.details');
const detailsImg = document.querySelector('.details_img_child') 
const detailsName = document.querySelector('.detail_name') 
const detailsPhone = document.querySelector('.details_phone') 
const editContentBtn = document.querySelector('.edit-btn')
const deleteContactBtn = document.querySelector('.delete-btn')
const detailsBody = document.querySelector('.details_body')
const saveChangesBtn = document.querySelector('#save-changes-btn');

document.addEventListener('onload', phoneBook.getLoc())


function displayContacts(){
    container.innerHTML = '';

    for(let i = 0; i < phoneBook.contacts.length; i++){
    const contact = document.createElement('div')
    contact.classList.add('contact')
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('contact_image-div')
    const img = document.createElement('img')
    img.classList.add('contact_img')
    img.src = `${phoneBook.contacts[i].photo}`
    const name = document.createElement('p')
    name.classList.add('contact_name')
    name.innerHTML = `${phoneBook.contacts[i].fullname}`;

    const btn = document.createElement('button')
    btn.classList.add('show-number')
    btn.innerHTML = '...'
    btn.id = phoneBook.contacts[i].index;
    btn.addEventListener('click',function openDetails() {
        createDetails(this.id)
        details.classList.add('openedDetails')
    })

    imageDiv.appendChild(img);
    contact.appendChild(imageDiv);
    contact.appendChild(name)
    contact.appendChild(btn)
    container.appendChild(contact)
    }
}

displayContacts()


function saveContact(){
    const photolink = document.querySelector('.photolink')
    const fullname = document.querySelector('.fullname')
    const phone = document.querySelector('.phone')
    const validatePara = document.querySelector('.validate');
    const exists = document.querySelector('.exists');

    if(photolink.value.length < 1 || fullname.value.length < 1 || phone.value.length < 1){
        validatePara.classList.remove('hide')
        return
    }
    for(let i = 0; i < phoneBook.contacts.length; i++){
        if(phoneBook.contacts[i].fullname === fullname.value || phoneBook.contacts[i].phone === phone.value){
            exists.classList.remove('hide');
            return 
        }
    }

    phoneBook.addContact(photolink.value, fullname.value, phone.value)
    validatePara.classList.add('hide')
    exists.classList.add('hide');

    photolink.value = '';
    fullname.value = '';
    phone.value = '';
    displayContacts()

}


saveBtn.addEventListener('click', saveContact);


function createDetails(index) {
    let targetContact;
    for(let i = 0; i < phoneBook.contacts.length; i++){
        if(phoneBook.contacts[i].index == index){
            targetContact = phoneBook.contacts[i]
        }
    }
    detailsImg.src = targetContact.photo;
    detailsName.innerHTML = targetContact.fullname;
    detailsPhone.innerHTML = targetContact.number;
    detailsBody.id = targetContact.index;
    
}


function closeDetails() {
    details.classList.remove('openedDetails')
}

deleteContactBtn.addEventListener('click', function() {
    let index;
    for(let i = 0; i < phoneBook.contacts.length; i++){
        if(phoneBook.contacts[i].index == this.parentNode.id){
            index = phoneBook.contacts.indexOf(phoneBook.contacts[i])
        }
    }
    phoneBook.removeContact(index)
    displayContacts()
    details.classList.remove('openedDetails')
    console.log(phoneBook.contacts);
})

const photolink = document.querySelector('.photolink2')
const fullname = document.querySelector('.fullname2')
const phone = document.querySelector('.phone2')

editContentBtn.addEventListener('click', function() {

    
    let targetContact;
    let index = this.parentNode.id;
    for(let i = 0; i < phoneBook.contacts.length; i++){
        if(phoneBook.contacts[i].index == index){
            targetContact = phoneBook.contacts[i]
        }
    }
    
    photolink.value = targetContact.photo;
    fullname.value = targetContact.fullname;
    phone.value = targetContact.number;
    saveChangesBtn.id = targetContact.index;
})

saveChangesBtn.addEventListener('click', function() {
    let targetContact;
    for(let i = 0; i < phoneBook.contacts.length; i++){
        if(phoneBook.contacts[i].index == this.id){
            targetContact = phoneBook.contacts.indexOf(phoneBook.contacts[i])
        }
    }
    phoneBook.contacts[targetContact].fullname = fullname.value;
    phoneBook.contacts[targetContact].photo = photolink.value;
    phoneBook.contacts[targetContact].number = phone.value;

    displayContacts()
    createDetails(targetContact)
})
