export const handleInputChanges = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  formData: any,
  setFormData: any
) => {
  if (event) {
    const { name, value, validationMessage } = event.target;
    setFormData({
      ...formData,
      [name]: {
        value,
        error: validationMessage,
      },
    });
  }
};
