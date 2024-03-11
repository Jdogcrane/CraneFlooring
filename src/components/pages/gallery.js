import React from 'react';
import '../../Styles/gallery.css';
import { Row, Col, MediaBox } from 'react-materialize';

// Assuming all your images are in a folder named 'images'
const imageContext = require.context('../images/gallery', false, /\.(png|jpe?g|webp|svg)$/);

const imageFiles = imageContext.keys();

const images = imageFiles.map((imageFile, index) => ({
  url: imageContext(imageFile).default,
  order: index,
}));

// Specify the order of image indexes
const initialImageOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Initial order

export default function Gallery() {
  const imagesPerRow = 2;

  // Use state to manage the order of images
  const [imageOrder] = React.useState(initialImageOrder);

  return (
    <>
      <div className='spaceDown invisible'>
        <p>-</p>
      </div>
      <div className="center contain1 animate__animated spaceDown animate__delay-1s animate__fadeIn">
        <Row className="">
          <Col className="black-text normalText" s={12} m={12} l={12}>
            <p>Project</p>
          </Col>
          <Col className="black-text greyText strong title" s={12} m={12} l={12}>
            <p>Gallery</p>
          </Col>
        </Row>

        {imageOrder.reduce((rows, imageIndex) => {
          if (imageIndex % imagesPerRow === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(images.find(img => img.order === imageIndex));
          return rows;
        }, []).map((row, rowIndex) => (
          <Row key={rowIndex} className=" ">
            {row.map((image, colIndex) => (
              <Col
                key={colIndex}
                className={`black-text spaceSmall greyText fade`}
                s={12} m={12} l={6} // Adjust the column size as needed
              >
                <MediaBox
                  id={`MediaBox_${rowIndex}_${colIndex}`}
                  options={{
                    inDuration: 275,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                  }}
                >
                  <img alt={`flooring-img-${rowIndex}_${colIndex}`} src={image.url} width="400" height="400" />
                </MediaBox>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </>
  );
}
