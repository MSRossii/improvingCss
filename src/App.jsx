import image1 from "./assets/imgs/img1.jpg";
import image2 from "./assets/imgs/img2.jpg";
import image3 from "./assets/imgs/img3.jpg";
import image4 from "./assets/imgs/img4.jpg";

export default function App() {
  return (
    <>
      <div>
        {/* header*/}
        <header>
          <nav>
            <a href="">Home</a>
            <a href="">Contacts</a>
            <a href="">Info</a>
          </nav>
        </header>

        {/* carousel */}
        <div className="carousel">
          <div className="list">
            <div className="item">
              <img src={image1} alt="" />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">Desing Slider</div>
                <div className="topic">Game</div>
                <div className="des">
                  dnwqjndjwq dkjwnqjdwq jdnqwjndjq wndqwjndwq ndwq dnwqnd jwqndj
                  wqn
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={image2} alt="" />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">Desing Slider</div>
                <div className="topic">Game</div>
                <div className="des">
                  dnwqjndjwq dkjwnqjdwq jdnqwjndjq wndqwjndwq ndwq dnwqnd jwqndj
                  wqn
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={image3} alt="" />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">Desing Slider</div>
                <div className="topic">Game</div>
                <div className="des">
                  dnwqjndjwq dkjwnqjdwq jdnqwjndjq wndqwjndwq ndwq dnwqnd jwqndj
                  wqn
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={image4} alt="" />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">Desing Slider</div>
                <div className="topic">Game</div>
                <div className="des">
                  dnwqjndjwq dkjwnqjdwq jdnqwjndjq wndqwjndwq ndwq dnwqnd jwqndj
                  wqn
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src={image1} />
            <div className="content">
              <div className="title"> Name Slider</div>
              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image2} />
            <div className="content">
              <div className="title"> Name Slider</div>
              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image3} />
            <div className="content">
              <div className="title"> Name Slider</div>
              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image4} />
            <div className="content">
              <div className="title"> Name Slider</div>
              <div className="des">Description</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
