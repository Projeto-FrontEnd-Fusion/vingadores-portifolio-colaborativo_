import { useCreateUser } from '../api/usersApi/usersApi';
import { FormData } from '../schema/schema-validation-forms';

const useFormHandler = () => {
  const { mutateAsync, isSuccess, isError } = useCreateUser();

  const handleFormSubmit = async (data: FormData) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return { handleFormSubmit, isSuccess, isError };
};

export default useFormHandler;
