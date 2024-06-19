<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          <svg
            class="logo-icon-wn"
            viewBox="0 0 345 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M342.046 57.4039L334.922 49.5101V57.4039H332.663V40.1021H334.922V48.12L342.071 40.1021H344.926L337.081 48.7654L345 57.4039H342.046Z"
              fill="#0D1F2D"
            />
            <path
              d="M326.67 57.4039L322.55 50.3293H319.819V57.4039H317.56V40.1021H323.146C324.453 40.1021 325.553 40.3255 326.447 40.7723C327.357 41.2191 328.036 41.8232 328.483 42.5844C328.929 43.3457 329.153 44.2145 329.153 45.1909C329.153 46.3824 328.805 47.4332 328.11 48.3434C327.432 49.2536 326.406 49.8576 325.032 50.1555L329.376 57.4039H326.67ZM319.819 48.5172H323.146C324.37 48.5172 325.289 48.2193 325.901 47.6235C326.513 47.0112 326.819 46.2003 326.819 45.1909C326.819 44.1648 326.513 43.3705 325.901 42.8078C325.305 42.2452 324.387 41.9638 323.146 41.9638H319.819V48.5172Z"
              fill="#0D1F2D"
            />
            <path
              d="M305.89 57.5777C304.285 57.5777 302.82 57.2054 301.496 56.4607C300.172 55.6994 299.122 54.6486 298.344 53.3081C297.583 51.9511 297.202 50.4286 297.202 48.7406C297.202 47.0526 297.583 45.5384 298.344 44.1979C299.122 42.8409 300.172 41.7901 301.496 41.0454C302.82 40.2841 304.285 39.9035 305.89 39.9035C307.512 39.9035 308.985 40.2841 310.309 41.0454C311.633 41.7901 312.675 42.8327 313.436 44.1731C314.198 45.5136 314.578 47.0361 314.578 48.7406C314.578 50.4451 314.198 51.9676 313.436 53.3081C312.675 54.6486 311.633 55.6994 310.309 56.4607C308.985 57.2054 307.512 57.5777 305.89 57.5777ZM305.89 55.6167C307.098 55.6167 308.182 55.3353 309.142 54.7727C310.118 54.21 310.88 53.4074 311.426 52.3648C311.988 51.3222 312.27 50.1142 312.27 48.7406C312.27 47.3505 311.988 46.1424 311.426 45.1164C310.88 44.0738 310.127 43.2712 309.167 42.7085C308.207 42.1459 307.115 41.8645 305.89 41.8645C304.665 41.8645 303.573 42.1459 302.613 42.7085C301.654 43.2712 300.892 44.0738 300.33 45.1164C299.784 46.1424 299.51 47.3505 299.51 48.7406C299.51 50.1142 299.784 51.3222 300.33 52.3648C300.892 53.4074 301.654 54.21 302.613 54.7727C303.59 55.3353 304.682 55.6167 305.89 55.6167Z"
              fill="#0D1F2D"
            />
            <path
              d="M295.574 40.1021L290.559 57.4039H288.027L284.006 43.4781L279.836 57.4039L277.329 57.4288L272.488 40.1021H274.896L278.669 54.7727L282.839 40.1021H285.371L289.343 54.723L293.141 40.1021H295.574Z"
              fill="#0D1F2D"
            />
            <path
              d="M271.048 40.1021V41.939H266.332V57.4039H264.073V41.939H259.332V40.1021H271.048Z"
              fill="#0D1F2D"
            />
            <path
              d="M249.931 41.939V47.7229H256.236V49.5846H249.931V55.5422H256.981V57.404H247.672V40.0773H256.981V41.939H249.931Z"
              fill="#0D1F2D"
            />
            <path
              d="M243.821 57.404H241.562L232.477 43.627V57.404H230.218V40.0773H232.477L241.562 53.8294V40.0773H243.821V57.404Z"
              fill="#0D1F2D"
            />
            <path
              d="M220.879 57.5777C219.604 57.5777 218.463 57.3708 217.453 56.9571C216.444 56.5434 215.633 55.9311 215.02 55.1202C214.425 54.3093 214.11 53.3329 214.077 52.191H218.595C218.661 52.8365 218.885 53.3329 219.265 53.6804C219.646 54.0114 220.142 54.1769 220.755 54.1769C221.383 54.1769 221.88 54.0362 222.244 53.7549C222.608 53.457 222.79 53.0516 222.79 52.5386C222.79 52.1083 222.641 51.7525 222.343 51.4712C222.062 51.1898 221.706 50.9582 221.276 50.7761C220.862 50.5941 220.266 50.3872 219.489 50.1555C218.363 49.808 217.445 49.4605 216.733 49.113C216.022 48.7654 215.409 48.2524 214.896 47.5739C214.383 46.8954 214.127 46.01 214.127 44.9178C214.127 43.296 214.714 42.03 215.889 41.1198C217.064 40.1931 218.595 39.7297 220.482 39.7297C222.401 39.7297 223.949 40.1931 225.124 41.1198C226.299 42.03 226.927 43.3043 227.01 44.9426H222.418C222.385 44.38 222.178 43.9414 221.797 43.627C221.417 43.296 220.928 43.1305 220.333 43.1305C219.82 43.1305 219.406 43.2712 219.091 43.5525C218.777 43.8173 218.62 44.2062 218.62 44.7192C218.62 45.2819 218.885 45.7204 219.414 46.0349C219.944 46.3493 220.771 46.6885 221.896 47.0526C223.022 47.4332 223.932 47.7973 224.627 48.1448C225.339 48.4924 225.951 48.9971 226.464 49.6591C226.977 50.321 227.234 51.1733 227.234 52.2159C227.234 53.2088 226.977 54.1107 226.464 54.9216C225.968 55.7325 225.239 56.3779 224.28 56.8578C223.32 57.3378 222.186 57.5777 220.879 57.5777Z"
              fill="#0D1F2D"
            />
            <path
              d="M207.736 39.978H212.08L209.3 46.6306H206.445L207.736 39.978Z"
              fill="#0D1F2D"
            />
            <path
              d="M203.691 57.4039H199.446L192.347 46.6554V57.4039H188.102V39.978H192.347L199.446 50.7761V39.978H203.691V57.4039Z"
              fill="#0D1F2D"
            />
            <path
              d="M178.917 43.3788V46.9037H184.601V50.1804H178.917V54.0031H185.346V57.4039H174.672V39.978H185.346V43.3788H178.917Z"
              fill="#0D1F2D"
            />
            <path
              d="M171.62 39.978V57.4039H167.375V46.9533L163.478 57.4039H160.052L156.13 46.9285V57.4039H151.885V39.978H156.899L161.79 52.0421L166.63 39.978H171.62Z"
              fill="#0D1F2D"
            />
            <path
              d="M140.612 57.5777C138.974 57.5777 137.468 57.1971 136.094 56.4358C134.737 55.6746 133.653 54.6155 132.842 53.2584C132.048 51.8849 131.651 50.3458 131.651 48.6413C131.651 46.9368 132.048 45.406 132.842 44.049C133.653 42.692 134.737 41.6329 136.094 40.8716C137.468 40.1104 138.974 39.7297 140.612 39.7297C142.25 39.7297 143.748 40.1104 145.105 40.8716C146.478 41.6329 147.554 42.692 148.332 44.049C149.126 45.406 149.523 46.9368 149.523 48.6413C149.523 50.3458 149.126 51.8849 148.332 53.2584C147.538 54.6155 146.462 55.6746 145.105 56.4358C143.748 57.1971 142.25 57.5777 140.612 57.5777ZM140.612 53.7053C142.002 53.7053 143.111 53.2419 143.938 52.3152C144.782 51.3884 145.204 50.1638 145.204 48.6413C145.204 47.1023 144.782 45.8776 143.938 44.9675C143.111 44.0407 142.002 43.5774 140.612 43.5774C139.205 43.5774 138.08 44.0324 137.236 44.9426C136.408 45.8528 135.995 47.0857 135.995 48.6413C135.995 50.1804 136.408 51.4132 137.236 52.34C138.08 53.2502 139.205 53.7053 140.612 53.7053Z"
              fill="#0D1F2D"
            />
            <path
              d="M130.242 39.978L125.699 57.4039H120.561L117.78 45.9356L114.901 57.4039H109.763L105.344 39.978H109.887L112.394 52.6627L115.497 39.978H120.164L123.142 52.6627L125.674 39.978H130.242Z"
              fill="#0D1F2D"
            />
            <path
              d="M46.06 0.00684983C50.4695 0.0513727 54.879 0.0958961 59.2885 0.140419C66.371 12.4116 73.4535 24.6862 80.5361 36.9574C84.8123 29.9057 89.0885 22.8539 93.3647 15.8022C97.152 15.8467 100.936 15.8913 104.723 15.9358C96.7521 29.7242 88.7774 43.516 80.8061 57.3044C71.4539 41.2385 62.0982 25.1726 52.746 9.10665C47.1777 18.5215 41.6095 27.9398 36.0412 37.3547C34.1714 33.9641 32.2982 30.5701 30.4285 27.1795C35.6412 18.1208 40.8506 9.06212 46.0634 0L46.06 0.00684983Z"
              fill="#0D1F2D"
            />
            <path
              d="M0 15.9093H11.2305C19.52 29.99 27.8061 44.0672 36.0956 58.1479C41.6219 48.7927 47.1483 39.4341 52.6712 30.0789C57.9752 39.2118 63.2759 48.3482 68.5799 57.4811C64.7019 57.5256 60.8273 57.57 56.9493 57.6145C55.5233 55.2073 54.0972 52.8035 52.6712 50.3963C47.1449 59.7515 41.6185 69.1101 36.0956 78.4653C24.5539 58.7291 0.489026 17.024 0 15.9093Z"
              fill="#BB2649"
            />
          </svg>
        </router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link v-if="admin" class="link" :to="{ name: 'CreatePost' }"
            >Create Post</router-link
          >
          <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
            >Login/Register</router-link
          >
        </ul>
        <div
          v-if="user"
          :class="{ 'mobile-user-menu': mobile }"
          @click="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileUsername }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'Profile' }">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div v-if="admin" class="option">
                <router-link class="option" :to="{ name: 'Admin' }">
                  <adminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div @click="signOut" class="option">
                <signOutIcon class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link v-if="admin" class="link" :to="{ name: 'CreatePost' }"
          >Create Post</router-link
        >
        <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navigation",
  components: {
    menuIcon,
    userIcon,
    adminIcon,
    signOutIcon,
  },
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },

    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #bb2649;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }

      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background-color: #bb2649;

        span {
          pointer-events: none;
        }

        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #bb2649;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;

            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #fff;
              color: #0d1f2d;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 5px;
            }

            .right {
              flex: 1;
              margin-left: 24px;

              p:nth-child(1) {
                font-size: 14px;
              }

              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }

          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #fff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }

              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }

    .mobile-user-menu {
      margin-right: 40px;
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #0d1f2d;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
  .logo-icon-wn {
    width: 21.5625rem;
    height: 4.90406rem;
  }
  // mobile
  @media (max-width: 480px) {
    .logo-icon-wn {
      width: 7.5625rem;
      height: 1.90406rem;
    }
  }
}
</style>
