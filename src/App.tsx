import React from "react";
import Input from "./components/input";
import Modal from "./components/modal";
import Typography from "./components/typography";
import Layout from "./layout";
import LeftAside from "./layout/left";
import Main from "./layout/main";
import NewStuff from "./pages/Stuff/NewStuff";

function App() {
  const [formValues, setFormValues] = React.useState<any>({});
  const [formErrors, setFormErrors] = React.useState<any>({});

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleErrors = (name: string, error: string) => {
    setFormErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    const { name, value } = e.currentTarget;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));

    // check if the input is empty
    if (value === "") {
      handleErrors(name, "This field is required");
    } else {
      handleErrors(name, "");
    }
  };

  return (
    <Layout>
      <LeftAside title='General Settings'>
        <form action=''>
          <Input
            placeholder='Search'
            type='text'
            onChange={handleInputChanges}
            label='Headline'
            name='headline'
            value={formValues.headline || ""}
            errorText={formErrors.headline}
          />
          <Input
            placeholder='Search'
            type='text'
            onChange={handleInputChanges}
            label='Description'
            isTextArea
            name='description'
            value={formValues.description || ""}
            errorText={formErrors.description}
          />
          <Input
            placeholder='Success'
            type='text'
            onChange={handleInputChanges}
            label='Success Message'
            name='success'
            value={formValues.success || ""}
            errorText={formErrors.success}
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
