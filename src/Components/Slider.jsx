import img01 from '../images/Group81.png';
import img02 from '../images/Group81.png';
import img03 from '../images/Group81.png';
import img04 from '../images/Group81.png';
import img05 from '../images/Group81.png';
import img06 from '../images/Group81.png';
import img07 from '../images/Group81.png';
import img08 from '../images/Group81.png';
import img09 from '../images/Group81.png';
import img10 from '../images/Group81.png';

const images = [
  { src: img01, position: 1 },
  { src: img02, position: 2 },
  { src: img03, position: 3 },
  { src: img04, position: 4 },
  { src: img05, position: 5 },
  { src: img06, position: 6 },
  { src: img07, position: 7 },
  { src: img08, position: 8 },
  { src: img09, position: 9 },
  { src: img10, position: 10 },
];

const Slider = () => {
  return (
    <main>
      <div
        className="slider"
        style={{
          '--width': '300px',
          '--height': '50px',
          '--quantity': images.length,
        }}
      >
        <div className="list">
          {images.map((image) => (
            <div
              key={image.position}
              className="item"
              style={{ '--position': image.position }}
            >
              <img src={image.src} alt={`slider image ${image.position}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Slider;
