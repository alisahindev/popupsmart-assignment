export interface IGlobalContext {
  isError: boolean;
  loading: boolean;
  isModalOpen: boolean;
  formData: any;
}

export interface IGlobal extends IGlobalContext {
  setLoading: (loading: boolean) => void;
  setModalOpen: (isModalOpen: boolean) => void;
  setFormData: React.Dispatch<any>;
}
