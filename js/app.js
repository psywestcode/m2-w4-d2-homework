// Local Component Definition for Navigation
const NavigationComponent = {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded mb-3">
            <span class="navbar-brand">Food Blog</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="link in links" :key="link">
                        <a class="nav-link" href="#">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    data() {
        return {
            links: ['Home', 'Recipes', 'Lifestyles', 'Videos', 'About']
        }
    }
};

// Global Component for Comments (kept from your original code)
Vue.component('comment-post', {
    props: ['author', 'date', 'content'],
    template: `
        <div class="post card mb-3">
            <div class="card-body">
                <div class="media">
                    <img v-bind:src="'profile.png'" class="profile-pic mr-3" v-on:click="$emit('author-clicked', author)" alt="User">
                    <div class="media-body">
                        <h5 class="mt-0">{{ author }} <small class="text-muted">{{ date }}</small> <span class="badge badge-secondary float-right">REPLY</span></h5>
                        {{ content }}
                    </div>
                </div>
            </div>
        </div>
    `
});

// Main Vue Instance
new Vue({
    el: '#app',
    components: {
        // Registering the local component
        'navigation-component': NavigationComponent
    },
    data: {
        headerTitle: 'Food Blog',
        commentsTitle: 'Comments',
        // Instruction 2: Image converted to Vue data
        chiliPhoto: 'images/chili.jpg', 
        selectedAuthor: null,
        
        // Data from your original repo
        authorDetails: {
            "Brianna": {
                level: "Novice",
                bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!"
            },
            "LINH": {
                level: "Newcomer",
                bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time."
            },
            "CATHERINE LEONARDO": {
                level: "Mentor",
                bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!"
            },
            "KALI": {
                level: "Novice",
                bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
            }
        },
        posts: [
            {
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
            },
            {
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!'
            },
            {
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
            },
            {
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
            }
        ]
    },
    methods: {
        showProfile(authorName) {
            if (this.authorDetails[authorName]) {
                this.selectedAuthor = {
                    name: authorName,
                    ...this.authorDetails[authorName]
                };
            }
        }
    }
});