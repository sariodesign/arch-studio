<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');
@font-face {
  font-family: "Spartan Bold";
  font-weight: 700;
  src:
    local("Trickster"),
    url("./spartan-bold.woff2") format("woff2");
}


:root {
  /* Colors */
  --very-dark-blue: #1B1D23;
  --dark-grey: #60636D;
  --medium-grey: #7D828F;
  --light-grey: #C8CCD8;
  --very-light-grey: #EEEFF4;
  --white: #FFFFFF;
  --red: #DF5656;

  /* Font */
  --base-font: 'League Spartan', sans-serif;
}

body {
  font-family: var(--base-font);
  margin: 0;
}

header,
main {
  @media screen and (min-width: 768px) {
		margin: 0 auto;
		max-width: 573px;
  }

  @media screen and (min-width: 1024px) {
		max-width: 1110px;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.btn-link {
  align-items: center;
  background-color: var(--very-dark-blue);
  color: var(--white);
  column-gap: 24px;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 72px;
  justify-content: center;
  text-decoration: none;
  width: 252px;
}

</style>
