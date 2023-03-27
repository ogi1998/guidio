import { useRef } from 'react';
import img from '../../../assets/user_profile.jpg';
import UploadButton from '../../common/UploadButton';

const GuideHeader = () => {
  const fileRef = useRef();
  function onUpload() {

  }

  function onDelete() {

  }
  return (
    <header className="h-[40vh] relative bg-fixed flex justify-center items-center">
      <img src={img} alt="Cover" className="absolute w-full h-full object-cover z-1" />
      <div className="z-20 flex flex-col gap-5">
        <UploadButton uploadRef={fileRef} text="Upload Cover Image" onUpload={onUpload} color="light" />
      </div>
    </header>
  )
}
export default GuideHeader