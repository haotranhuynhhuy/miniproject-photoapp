import PropTypes from 'prop-types'
import { Button} from "reactstrap"
import './RandomPhoto.scss'

const RandomPhoto = (props) => {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

    const getImageUrl = () =>{
        const randomId = Math.round((Math.random()) * 2000);
        return `https://picsum.photos/id/${randomId}/200/200`
    }

    const handleRandomPhoto = () => {
       if(onImageUrlChange){
        const randomImageUrl = getImageUrl();
        onImageUrlChange(randomImageUrl)
       }
    }
    return (
        <div className='random-photo'>
            <div className='random-photo__button'>
                <Button
                    name={name}
                    outline
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhoto}
                    color='primary'> Random a photo</Button>
            </div>
            <div className='random-photo__photo'>
                {imageUrl && <img src={imageUrl} alt='Ooops....' />}
            </div>
        </div>

    )
}
RandomPhoto.propTypes = {

    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onImageUrlBlur: PropTypes.func
}
export default RandomPhoto;