export interface IGlobalContext {
  isError: boolean;
  loading: boolean;
  isModalOpen: boolean;
}

export interface IGlobal extends IGlobalContext {
  setLoading: (loading: boolean) => void;
  setModalOpen: (isModalOpen: boolean) => void;
}
