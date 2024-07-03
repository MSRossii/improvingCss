import image1 from "./assets/imgs/img1.jpg";
import image2 from "./assets/imgs/img2.jpg";
import image3 from "./assets/imgs/img3.jpg";
import image4 from "./assets/imgs/img4.jpg";

export default function App() {
  //step 1: get DOM
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let carouselDom = document.querySelector(".carousel");
  let SliderDom = carouselDom.querySelector(".carousel .list");
  let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  let timeDom = document.querySelector(".carousel .time");

  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  let timeAutoNext = 7000;

  nextDom.onclick = function () {
    showSlider("next");
  };

  prevDom.onclick = function () {
    showSlider("prev");
  };
  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
  }
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

          <div className="arrows">
            <button className="prev">left</button>
            <button className="next">right</button>
          </div>

          <div class="time"></div>
        </div>
      </div>
    </>
  );
}
