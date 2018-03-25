<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
      <img src="@assets/img/canechair-logo.png" alt="canechair-logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <form class="form-inline my-2 my-lg-0 mr-auto">
        <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="@assets/img/admin-avatar.jpeg" class="avatar img-thumbnail" /> {{this.$store.state.user.name}}</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>

              <router-link to="/" class="dropdown-item" href="#">
                <i class="fas fa-user fa-lg"></i> Profile</router-link>
            </li>
            <li>
              <router-link to="/" class="dropdown-item" href="#">
                <i class="fas fa-cog fa-lg"></i> Settings</router-link>
            </li>
            <li>
              <hr/>
            </li>
            <li>
              <router-link to="/" class="dropdown-item" href="#">
                <i class="fas fa-sign-out-alt fa-lg"></i> Logout</router-link>
            </li>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    name: "CcMainHeader",
    components: {
    }
  };
</script>
<style lang="scss" scoped>
  .avatar {
    border-radius: 50%;
    width: 50px
  }
</style>