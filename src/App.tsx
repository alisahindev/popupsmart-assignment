import React from "react";
import Input from "./components/input";
import Modal from "./components/modal";
import { useGlobalContext } from "./context/GlobalContext";
import { IGlobal } from "./context/interfaces";
import Layout from "./layout";
import LeftAside from "./layout/left";
import Main from "./layout/main";
import NewStuff from "./pages/Stuff/NewStuff";
import { handleInputChanges } from "./utils/HandleInputChanges";

function App() {
  const { formData, setFormData, isError }: IGlobal = useGlobalContext();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleInputChanges(e, formData, setFormData);
  };

  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(step + 1);
  };

  return (
    <Layout>
      <LeftAside title='General Settings'>
        <Input
          placeholder='Search'
          type='text'
          onChange={handleChange}
          label='Headline'
          name='headline'
          value={formData.headline?.value || ""}
          errorText={formData.headline?.error}
          required
        />
        <Input
          placeholder='Search'
          type='text'
          onChange={handleChange}
          label='Description'
          isTextArea
          name='description'
          value={formData.description?.value || ""}
          errorText={formData.description?.error}
          required
        />
        <Input
          placeholder='Success'
          type='text'
          onChange={handleChange}
          label='Success Message'
          name='success'
          value={formData.success?.value || ""}
          errorText={formData.success?.error}
          required
        />
      </LeftAside>
      <Main>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} isClosable={step !== 1}>
          {step === 1 ? (
            <NewStuff handleNext={handleNext} />
          ) : (
            <div>
              <h1>Step 2</h1>
            </div>
          )}
        </Modal>
      </Main>
    </Layout>
  );
}

export default App;
