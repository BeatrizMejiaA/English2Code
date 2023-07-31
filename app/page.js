"use client";
import NavBar from "./components/navBar";
import HomePage from "./components/HomePage";
import Experiences from "./components/Experiences";
import Differentiators from "./components/Differentiators";
import Methodology from "./components/Methodology";
import Content from "./components/Content";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Experiences />
      <Differentiators />
      <Methodology />
      <Content />
      <Footer/>
    </div>
  );
}

{
  /*<Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h1 className="text-red-500">Using Material UI with Next.js 13</h1>
        <Stack direction="row" columnGap={1}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
</Grid>*/
}
