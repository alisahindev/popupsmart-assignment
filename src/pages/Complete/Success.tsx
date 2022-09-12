import style from "./index.module.css";
import img from "../../assets/images/success.svg";
import { useGlobalContext } from "src/context/GlobalContext";
import { IGlobal } from "src/context/interfaces";
import Typography from "src/components/typography";

const SuccessPage = () => {
  const { formData }: IGlobal = useGlobalContext();

  return (
    <div className={style.container}>
      <img src={img} alt={formData.success?.value} />
      <Typography
        variant='headline'
        textStyle={{
          marginTop: "2px",
          textTransform: "capitalize",
        }}
        text={formData.success?.value}
      />
    </div>
  );
};

export default SuccessPage;
