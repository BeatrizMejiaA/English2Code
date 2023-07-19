import Image from "next/image";
import Slider from "react-slick";
import styles from "@/src/styles/Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Card, Text, Col, Row } from "@nextui-org/react";
import { CarouselData } from "./CarouselData";

function Carousel() {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Slider {...settings} className={styles.carousel}>
          {CarouselData.map((slide, index) => {
            return (
              <Grid.Container gap={0} key={index} justify="center">
                <Grid
                  xs={4}
                  md={6}
                  css={{ verticalAlign: "top", pr: "4", marginTop: "-50px" }}
                >
                  <Text
                    h1
                    size={30}
                    weight="bold"
                    color="white"
                    css={{ textAlign: "center" }}
                  >
                    {slide.title}
                  </Text>
                  <Text
                    h1
                    size={18}
                    weight="hairline"
                    color="white"
                    css={{ textAlign: "center", paddingRight: "20px" }}
                  >
                    {slide.content}
                  </Text>
                </Grid>
                <Grid xs={4} md={6}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={900}
                    height={200}
                  
                  />
                </Grid>
              </Grid.Container>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
