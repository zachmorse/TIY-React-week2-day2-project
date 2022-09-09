import React from 'react'

const style = {
    imageStyle: {
        display: 'block',
        maxWidth: 500,
        maxHeight: 500,
        width: 'auto',
        height: 'auto',
        margin: 10,
        boxShadow: '1px 1px 1px 1px solid white',
    },
    divStyle: {
        maxHeight: 510,
        maxWidth: 520,
        display: 'flex',
        flexDirection: 'row',
        overflow: '-webkit-paged-x',
        justifyContent: 'center',
        margin: 'auto',
    },
}

const ImageDisplay = ({ images, loading, error, errorMessage }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem' }}>(scroll left/right for multiple pictures. click for full size.)</p>
            {error && <div>{errorMessage}</div>}
            {!error && (
                <>
                    {loading ? (
                        <div>Fetching images...</div>
                    ) : (
                        <div style={style.divStyle}>
                            {images?.length ? (
                                images.map((image, idx) => (
                                    <a key={idx} href={image.img_src} target='_blank' rel='noopener noreferrer'>
                                        <img src={image.img_src} alt='mars rover' style={style.imageStyle} />
                                    </a>
                                ))
                            ) : (
                                <div>No images found.</div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default ImageDisplay
