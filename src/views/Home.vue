<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "Sample Blog Post",
          blogHTML: "Blog post title",
          blogCoverphoto: "coding",
        },
        {
          title: "Sample Blog Post 2",
          blogHTML: "Blog post title",
          blogCoverphoto: "coding-girl",
        },
      ],
    };
  },
};
</script>
