import qrCode from "../assets/image-qr-code.png";

const QRCodeCard = () => {
  return (
    <div className="w-80 sm:w-56 bg-white p-2.5 rounded-xl grid font-outfit shadow-md">
      <img src={qrCode} className="max-w-full rounded-lg" alt="QR Code" />
      <div className="text-center px-2">
        <h2 className="text-titleText font-bold py-3">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-infoText text-[15px] font-normal pb-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeCard;
