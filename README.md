# Women's Network

#### Video Demo: <URL HERE>

#### Description:

Women's Network (WN) is a platform for professional and personal development tailored towards women of the global community. The app is designed in Figma and developed with Vue.js and Firebase; it requires knowledge of the latter development tools. The aim of Women's Network is to provide a platform for networking, inspiration and sharing ideas through insightful blog posts made by WN registered users.

People are able to read blog posts, register on the platform, as well as become admins to write and publish new articles - edit them, add images or videos and delete if needed. There are three main pages: Home, Blogs and Register/ Login.

Home contains a welcome part, as well as featured and recent blog posts. Blogs section displays all of the posts on Women's Network. It is possible to open each blog post and read the full article. Blog posts include date added and for admins an option to edit posts. At the section Register/ Login there is a standard registration form and information is connected to the Firebase database. Once registered the user is able to login and if the password is forgotten an option to reset it automatically is also an option offered by Firebase.

Women's Network is a modern and minimalistic idea sharing tool with a smooth and responsive user experience.

## What each of the files you wrote for the project contains and does:

./firestore.indexes.json: Configuration file for Firestore database indexes.
./src: Source directory containing all the application code.
./src/App.vue: Main Vue component that serves as the root component of the application.
./src/.DS_Store: System file used by macOS to store custom attributes of a folder.
./src/main.js: Entry point JavaScript file for the Vue application.
./src/components: Directory containing reusable Vue components.
./src/components/BlogCoverPreview.vue: Vue component for displaying a preview of a blog cover.
./src/components/BlogCard.vue: Vue component for displaying a card view of a blog post.
./src/components/BlogPost.vue: Vue component for displaying a full blog post.
./src/components/Footer.vue: Vue component for the application’s footer.
./src/components/Loading.vue: Vue component to show a loading animation.
./src/components/Navigation.vue: Vue component for the navigation bar.
./src/components/Modal.vue: Vue component for displaying modal dialogs.
./src/firebase: Directory containing Firebase-related files.
./src/firebase/firebaseInit.js: JavaScript file for initializing Firebase in the application.
./src/views: Directory containing Vue components for different views/pages.
./src/views/Login.vue: Vue component for the login page.
./src/views/Home.vue: Vue component for the home page.
./src/views/Register.vue: Vue component for the registration page.
./src/views/ViewBlog.vue: Vue component for viewing a specific blog post.
./src/views/Profile.vue: Vue component for the user profile page.
./src/views/EditBlog.vue: Vue component for editing a blog post.
./src/views/ForgotPassword.vue: Vue component for the forgot password page.
./src/views/Blogs.vue: Vue component for displaying a list of blogs.
./src/views/CreatePost.vue: Vue component for creating a new blog post.
./src/views/Admin.vue: Vue component for the admin dashboard.
./src/views/BlogPreview.vue: Vue component for previewing a blog post.
./src/assets: Directory containing static assets like images and icons.
./src/assets/.DS_Store: System file used by macOS to store custom attributes of a folder.
./=18.0.0: A file related to a specific version of a package or a module.
./=20.0.0: Similar to ./=18.0.0, relates to a specific version of a package or module.
./src/assets/background.png: Background image used in the application.
./src/assets/logo.png: Logo image used in the application.
./src/assets/Icons: Directory containing icon files.
./src/assets/Icons/user-crown-light.svg: SVG icon of a user with a crown.
./src/assets/Icons/twitter-brands.svg: SVG icon of the Twitter logo.
./src/assets/Icons/lock-alt-solid.svg: SVG icon of a solid lock.
./src/assets/Icons/edit-regular.svg: SVG icon of an edit (pencil).
./src/assets/Icons/envelope-regular.svg: SVG icon of an envelope.
./src/assets/Icons/bars-regular.svg: SVG icon of a menu (bars).
./src/assets/Icons/sign-out-alt-regular.svg: SVG icon of a sign-out arrow.
./src/assets/Icons/linkedin-brands.svg: SVG icon of the LinkedIn logo.
./src/assets/Icons/trash-regular.svg: SVG icon of a trash can.
./src/assets/Icons/user-alt-light.svg: SVG icon of a user.
./src/assets/Icons/arrow-right-light.svg: SVG icon of a right-pointing arrow.
./src/assets/Icons/times-circle-light.svg: SVG icon of a circle with an 'X'.
./src/assets/Icons/instagram-brands.svg: SVG icon of the Instagram logo.
./src/assets/Icons/youtube-brands.svg: SVG icon of the YouTube logo.
./src/assets/blogPhotos: Directory containing blog-related photos.
./src/assets/blogPhotos/.DS_Store: System file used by macOS to store custom attributes of a folder.
./src/assets/blogPhotos/coding.jpg: Photo related to coding used in a blog post.
./src/store: Directory containing Vuex store files for state management.
./src/store/index.js: Main file for initializing the Vuex store.
./src/router: Directory containing Vue Router configuration files.
./src/router/index.js: Main file for configuring the application's routes.

## If you debated certain design choices, explaining why you made them:

Some design choices include the use of colours: dark-blue and violet-red. Font is Poppins - it goes for a minimalistic and modern look with simple, clean lines. In my design, I made specific color choices to convey particular values and emotions.

Dark-blue in the design symbolizes trust and dependability because dark blue is associated with stability, trust, and dependability. It is a common choice for corporate designs and financial institutions as it evokes a sense of security and professionalism. Additionally, dark blue promotes feelings of calmness and serenity, being a cool color that helps to soothe and relax the viewer. Furthermore, dark blue is linked to intelligence and expertise, making it an excellent choice for industries that want to emphasize their knowledge and competence.

Violet-red in the design symbolizes creativity and innovation because violet-red is a color that stands out and is often associated with creativity and innovation. It can be used to draw attention and signal that something is unique or imaginative. This color also evokes feelings of passion, energy, and enthusiasm, being a warm color that inspires action and excitement. Moreover, violet-red has a rich, luxurious quality that conveys sophistication and elegance, often associated with high-end products and services.

By using dark-blue and violet-red in the design, I aimed to balance the stability and professionalism of dark-blue with the creativity and energy of violet-red. This creates a dynamic yet trustworthy aesthetic that appeals to a broad audience, suggesting a blend of reliability with innovative flair.

Note: Copilot was used to assist smoother writing and help with answering harder questions for debugging.

Thank you!

# Women's Network

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
