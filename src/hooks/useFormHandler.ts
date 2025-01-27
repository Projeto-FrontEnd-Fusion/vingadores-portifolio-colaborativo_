import { useCreateUser } from '../api/usersApi/usersApi';
import { FormData } from '../schema/schema-validation-forms';
import { useState } from 'react';

interface IFormRequestStatus {
  status: 'success' | 'error' | null;
  message: string | null;
}

const useFormHandler = () => {
  const { mutateAsync } = useCreateUser();
  const [formRequestStatus, setFormRequestStatus] = useState<IFormRequestStatus>({
    status: null,
    message: null,
  });

  const handleFormSubmit = async (data: FormData) => {
    try {
      await mutateAsync(data);
      setFormRequestStatus({
        status: 'success',
        message: 'Seja bem-vindo(a) à Comunidade Frontend Fusion!\n Cheque sua caixa de entrada para validar seu email.',
      });
    } catch (error) {
      console.error(error);
      setFormRequestStatus({
        status: 'error',
        message: 'Oops, ocorreu um erro.\n Tente novamente!',
      });
    }
  };

  return { formRequestStatus, handleFormSubmit };
};

export default useFormHandler;