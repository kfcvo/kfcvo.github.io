import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const collageImages = [
  { src: "/home/home-texture-01.png", alt: "灰绿色抽象绘画", className: "collage-one", x: 73.41, y: 43.2, width: 20.65, height: 18.01, rotation: 0.7, z: 0 },
  { src: "/home/home-texture-02.png", alt: "淡蓝色花卉绘画", className: "collage-two", x: 0, y: 26.62, width: 29, height: 22.51, rotation: -0.5, z: 3 },
  { src: "/home/home-texture-03.png", alt: "蓝紫色花朵绘画", className: "collage-three", x: 26.89, y: 30.1, width: 29.62, height: 34.38, rotation: 0.4, z: 11 },
  { src: "/home/home-texture-04.png", alt: "树影与花朵绘画", className: "collage-four", x: 16.01, y: 59.76, width: 15.25, height: 11.89, rotation: 0.25, z: 5 },
  { src: "/home/home-texture-05.png", alt: "灰绿色百合绘画", className: "collage-five", x: 51.09, y: 20.12, width: 15.53, height: 18.33, rotation: -1.2, z: 10 },
  { src: "/home/home-texture-06.png", alt: "灰蓝色写意花卉", className: "collage-six", x: 45.35, y: 50.32, width: 23.05, height: 18.15, rotation: -0.6, z: 3 },
  { src: "/home/home-texture-07.png", alt: "淡紫色花蕊绘画", className: "collage-seven", x: 56.09, y: 27.15, width: 29.39, height: 25.87, rotation: 0.9, z: 9 },
  { src: "/home/home-texture-08.png", alt: "蓝灰色抽象纹理", className: "collage-eight", x: 14.85, y: 16.65, width: 21.8, height: 20.3, rotation: 1, z: 7 },
];

export function HomeCollage() {
  return (
    <section className="collage-hero" aria-label="陈知雨个人作品集主视觉">
      <div className="collage-scene">
        <p className="collage-kicker">PRODUCT · AI · EXPERIENCE</p>
        <p className="collage-edition">PORTFOLIO / 2026<br />SINGAPORE — BEIJING</p>

        {collageImages.map((image, index) => {
          const style = {
            "--collage-x": `${image.x}%`,
            "--collage-y": `${image.y}%`,
            "--collage-width": `${image.width}%`,
            "--collage-height": `${image.height}%`,
            "--collage-rotation": `${image.rotation}deg`,
            "--collage-z": image.z,
          } as CSSProperties;

          return (
            <figure className={`collage-piece ${image.className}`} key={image.src} style={style}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 45vw, 28vw"
                priority={index < 4}
                unoptimized
              />
            </figure>
          );
        })}

        <div className="collage-note" aria-label="我的设计方法">
          <small>MY APPROACH</small>
          <p>Observe deeply.<br />Frame clearly.<br />Build thoughtfully.</p>
        </div>
        <span className="collage-sound" aria-hidden="true">♪</span>
        <Link className="collage-signature" href="#practice">My Portfolio <span>↘</span></Link>
      </div>
    </section>
  );
}
