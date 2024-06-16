<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
      :post="post"
    />

    <div class="blog-card-wrap">
      <div class="container">
        <h3>View recent blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>

    <div class="updates">
      <div class="container">
        <h2>Never miss a post, register today!</h2>
        <router-link class="router-button" to="#">
          Register Now <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import Arrow from "@/assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
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
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "Sample Blog Post 2",
          blogHTML: "Blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "July 1, 2024",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "July 2, 2024",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "July 3, 2024",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "July 4, 2024",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 48px;
      }
    }
  }
}
</style>
