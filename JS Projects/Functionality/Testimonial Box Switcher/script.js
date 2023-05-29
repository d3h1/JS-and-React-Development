// CLASSES
const container = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

// IDS


// OTHER
const testimonials = [
    {
        name: 'First1 Last1',
        position: 'Test1',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ut nisi fuga recusandae necessitatibus eos voluptate, magnam ex officia nesciunt itaque exercitationem, nostrum voluptatum veritatis? Aliquam culpa consequuntur architecto obcaecati amet tempora at quis harum vel dolorum? Quas soluta nemo illo pariatur sed officiis itaque, adipisci ducimus facilis cupiditate? Aspernatur!'
    },
    {
        name: 'First2 Last2',
        position: 'Test2',
        photo: 'https://randomuser.me/api/portraits/women/24.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ut nisi fuga recusandae necessitatibus eos voluptate, magnam ex officia nesciunt itaque exercitationem, nostrum voluptatum veritatis? Aliquam culpa consequuntur architecto obcaecati amet tempora at quis harum vel dolorum? Quas soluta nemo illo pariatur sed officiis itaque, adipisci ducimus facilis cupiditate? Aspernatur!'
    },
    {
        name: 'First3 Last3',
        position: 'Test3',
        photo: 'https://randomuser.me/api/portraits/women/21.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ut nisi fuga recusandae necessitatibus eos voluptate, magnam ex officia nesciunt itaque exercitationem, nostrum voluptatum veritatis? Aliquam culpa consequuntur architecto obcaecati amet tempora at quis harum vel dolorum? Quas soluta nemo illo pariatur sed officiis itaque, adipisci ducimus facilis cupiditate? Aspernatur!'
    },
    {
        name: 'First4 Last4',
        position: 'Test4',
        photo: 'https://randomuser.me/api/portraits/women/27.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ut nisi fuga recusandae necessitatibus eos voluptate, magnam ex officia nesciunt itaque exercitationem, nostrum voluptatum veritatis? Aliquam culpa consequuntur architecto obcaecati amet tempora at quis harum vel dolorum? Quas soluta nemo illo pariatur sed officiis itaque, adipisci ducimus facilis cupiditate? Aspernatur!'
    },
    {
        name: 'First5 Last5',
        position: 'Test5',
        photo: 'https://randomuser.me/api/portraits/women/41.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ut nisi fuga recusandae necessitatibus eos voluptate, magnam ex officia nesciunt itaque exercitationem, nostrum voluptatum veritatis? Aliquam culpa consequuntur architecto obcaecati amet tempora at quis harum vel dolorum? Quas soluta nemo illo pariatur sed officiis itaque, adipisci ducimus facilis cupiditate? Aspernatur!'
    },

]

// Set this as 1 and not 0 because the first one is already in the HTML
let idx = 1;


// EVENTS
// !You have to make sure this matches the CSS animation progress bar
setInterval(updateTestimonial, 10000)

// FUNCTIONS
function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}