import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

import { Video } from "../components/Video";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/lazy";

// import "./styles.css";


// import Swiper core and required modules
import {
  Navigation, Pagination, Autoplay, Lazy
} from 'swiper';


export default function Home() {
  // SwiperCore.use([Navigation, Autoplay, Pagination]);
  return (
    <Flex direction="column" mx="auto" bg="gray.300">
      
      <Box mx="auto" maxW={1480} w="100%">
        <Swiper
        modules={[Navigation, Autoplay, Pagination, Lazy]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        autoplay={{delay: 5000}}
        pagination={{
          clickable: true,
        }}
        style={{
          // margin: '10px',
          animationDelay: '0.5s',
        }}
        centeredSlides
        lazy={true}
        >
        <SwiperSlide>
          <Image src="./robot-1.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="./robot-2.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="./robot-3.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
        </SwiperSlide>
        
      </Swiper>
      </Box>
      <BoxContent width="900px" height="200px">
        <Text mx="auto" as="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat corporis tempora ducimus eius possimus quaerat modi odio neque magnam aperiam illum, numquam unde nesciunt voluptates reprehenderit, suscipit explicabo totam!
        </Text>
      </BoxContent>
      <Video />
    </Flex>
    
  )
}
