import React from "react";
import Input from "./components/input";
import Modal from "./components/modal";
import { useGlobalContext } from "./context/GlobalContext";
import { IGlobal } from "./context/interfaces";
import Layout from "./layout";
import LeftAside from "./layout/left";
import Main from "./layout/main";
import NewStuff from "./pages/Stuff/NewStuff";

function App() {
  const { formData, setFormData }: IGlobal = useGlobalContext();

  const [formErrors, setFormErrors] = React.useState<any>({});

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleErrors = (name: string, error: string) => {
    setFormErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // submit durumunda sayfa yenilenmesini önler
    e.stopPropagation();
    const { name, value, validationMessage } = e.currentTarget;
    // Input üzerinden veriler alınarak context state dinamik olarak ekleniyor.
    setFormData({ ...formData, [name]: value });
    // Inputların gereklilik durumlarına göre error mesajları yakalanıyor.
    // Error kısmı her halükarda yakalanır bunun için kontrol ihtiyacı hissetmedim.
    // Eğer bir error var ise elementin "validty" objesinde ki standart validate koşullarına göre doluyor.
    // Error handling çok daha profesyonel şekilde yapılabilir. Şimdilik bu yeterlidir.
    handleErrors(name, validationMessage);
  };

  return (
    <Layout>
      <LeftAside title="General Settings">
        <form action="">
          <Input
            placeholder="Search"
            type="text"
            onChange={handleInputChanges}
            label="Headline"
            name="headline"
            value={formData.headline || ""}
            errorText={formErrors.headline}
            required
          />
          <Input
            placeholder="Search"
            type="text"
            onChange={handleInputChanges}
            label="Description"
            isTextArea
            name="description"
            value={formData.description || ""}
            errorText={formErrors.description}
            required
          />
          <Input
            placeholder="Success"
            type="text"
            onChange={handleInputChanges}
            label="Success Message"
            name="success"
            value={formData.success || ""}
            errorText={formErrors.success}
            required
          />
        </form>
      </LeftAside>
      <Main>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <NewStuff />
        </Modal>
      </Main>
    </Layout>
  );
}

export default App;
