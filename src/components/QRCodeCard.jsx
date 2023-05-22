import qrCode from "../assets/image-qr-code.png";

const QRCodeCard = () => {
  return (
    <div className="w-72 bg-white p-3 rounded-xl grid font-outfit">
      <div className="text-center">
        <img src={qrCode} className="max-w-full rounded-lg" alt="QR Code" />

        <h2 className="text-titleText font-bold">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-infoText text-[15px] font-normal">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeCard;
