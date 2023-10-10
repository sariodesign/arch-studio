<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');

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
