const members = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO',
        photo: '<img src="img/wayne-barnett-founder-ceo.jpg" alt="">'
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        photo: '<img src="img/angela-caroll-chief-editor.jpg" alt="">'
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        photo: '<img src="img/walter-gordon-office-manager.jpg" alt="">'
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        photo: '<img src="img/angela-lopez-social-media-manager.jpg" alt="">'
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        photo: '<img src="img/scott-estrada-developer.jpg" alt="">'
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        photo: '<img src="img/barbara-ramos-graphic-designer.jpg" alt="">'
    }
]


for (let index = 0; index < members.length; index++) {
    const newCard = document.createElement('div');
    const singleobject = members[index];
    console.log(singleobject)
    

    newCard.innerHTML = (singleobject.photo)
   // newCard.append(singleobject.firstName);
    //newCard.append(singleobject.lastName);
    document.querySelector('.container').append(newCard)
    newCard.classList.add('card')
    const images = document.querySelectorAll('img')

    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        element.classList.add('img-spec')   
    }
    
}
