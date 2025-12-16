export default function Slideshow(image: string, alt: string) {
  return (
    <div className="window">
        <div className="titlebar">
            <p className="titlebar-text">Screenshots</p>
            <div className="titlebar-buttons">
                <div className="titlebar-box"></div>
                <div className="titlebar-box"></div>
                <div className="titlebar-box"></div>
            </div>
        </div>
      <img src={image} alt={alt}/>
    </div>

  )
}
