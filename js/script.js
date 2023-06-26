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
    const first = document.createElement('span');
    const last = document.createElement('span');
    const role = document.createElement('small')
    const singleobject = members[index];
   
    

    newCard.innerHTML = (singleobject.photo)
    first.append(singleobject.firstName)
    last.append(singleobject.lastName)
    role.append(singleobject.role)
    
    

    document.querySelector('.container').append(newCard)
    newCard.classList.add('card')

    const images = document.querySelectorAll('img')
    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        element.classList.add('img-spec')   
    }
    
    newCard.append(first, last)

    const data = document.querySelectorAll('span')
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        element.classList.add('text')   
    }

    newCard.append(role)

    const allRole = document.querySelectorAll('small')
    for (let index = 0; index < allRole.length; index++) {
        const element = allRole[index];
        element.classList.add('small')   
    }
}
