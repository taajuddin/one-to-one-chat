import Image from "next/image";
import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src="/whatsapp-logo-1.png"
          alt=""
          width={200}
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC2B" size={60} />
      </div>
    </center>
  );
};

export default Loading;
