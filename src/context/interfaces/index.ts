export interface IGlobalContext {
  loading: boolean;
  isModalOpen: boolean;
  formData: any;
  isError: boolean;
}

export interface IGlobal extends IGlobalContext {
  setLoading: (loading: boolean) => void;
  setModalOpen: (isModalOpen: boolean) => void;
  setFormData: React.Dispatch<any>;
}
