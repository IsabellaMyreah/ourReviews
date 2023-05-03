const reviews = [
    {
        id: 1,
        name:"Monique de Luca",
        job:"Web Developer",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "I'm baby maggings twe health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up"
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen...",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        image:"https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },
    {
        id: 4,
        name: "Bill Wanderson",
        job: "The Boss", 
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg" ,
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan."
    }
]

const author = document.getElementById('author');
const job = document.getElementById('job');
const image = document.getElementById('image-profile');
const information = document.getElementById('description');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const randomButton = document.querySelector('.random-button');

let currentItem = 0;

function showPerson(person) {
    const item = reviews[person]
    image.src = item.image
    author.textContent = item.name
    job.textContet = item.job
    information.textContent = item.textContent
}

nextButton.addEventlistener('click', () => {
    if(currentItem > reviews.length -1){
        currentItem = 0
    }

    showPerson(currentItem)
})

prevButton.addEventlistener('click', () => {
    currentItem--
    
    if(currentItem < 0) {
        currentItem = reviews.length -1
    }

    showPerson(currentItem)
})

randomButton.addEventListener('click', () => {
    const randomPerson = Math.floor(Math.random() * reviews.length)
    showPerson(randomPerson)
}) 




















// function buttons() {
//     var button = document.getElementById("GFG");
      
//     if (button.innerHTML === "Welcome to GeeksforGeeks") {
//         button.innerHTML = "A computer science portal for geeks";
//     } else {
//         button.innerHTML = "Welcome to GeeksforGeeks";
//     }
// } 