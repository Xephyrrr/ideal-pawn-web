import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from 'react-bootstrap/image'

class TeamImg extends React.Component {
  state = {
    galleryItems: [1, 2, 3, 4, 5].map((i) => <h2 key={i}>{i}</h2>),
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 4 },
  }
  render() {
    return (
      <AliceCarousel
        preventEventOnTouchMove={true}
        touchTrackingEnabled={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        responsive={this.responsive}
        autoPlay={false}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <a><Image src="/images/17slide.png" roundedCircle width="200" height="200" radius="100" resizeMode="contain"/></a>
        <Image src="/images/team02.png" roundedCircle width="200" height="200" gravity="faces" crop="fill" />
        <Image src="/images/slide.jpg" roundedCircle width="200" height="200"/>
        <Image src="/images/slide.jpg" roundedCircle width="200" height="200"/>
     </AliceCarousel>
    )
  }
}

export default TeamImg;
