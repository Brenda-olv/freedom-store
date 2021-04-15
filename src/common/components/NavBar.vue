<template>
  <!-- Main Navigation -->
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div class="container-fluid justify-content-center justify-content-md-between">
        <div class="d-flex my-2 my-sm-0">
          <a class="navbar-brand mr-2 mb-1 d-flex justify-content-center" href="#">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="20"
              alt=""
              loading="lazy"
            />
          </a>
        </div>

        <ul class="navbar-nav flex-row">
          <li class="nav-item mr-3 mr-lg-0">
            <a class="nav-link" href="#">
              <span><i class="fas fa-shopping-cart"></i></span>
            </a>
          </li>

          <li class="nav-item mr-3 mr-lg-0">
            <a class="nav-link" href="#">
              <span class="d-none d-lg-inline-block">Shop</span>
              <i class="fas fa-shopping-bag d-inline-block d-lg-none"></i>
            </a>
          </li>
          <li class="nav-item mr-3 mr-lg-0">
            <a class="nav-link" href="#">
              
            </a>
          </li>

          <!-- Avatar -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span><i class="fas fa-shopping-cart"></i></span>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li><a class="dropdown-item" href="#">My profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Navbar -->

    <div class="jumbotron color-grey-light mt-70">
      <div class="d-flex align-items-center h-100">
        <div class="container text-center mt-5 py-5">
          <h1 class="mb-3">Shop Custom Page</h1>
          <p class="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo
            non massa porta molestie.
          </p>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Navigation -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
