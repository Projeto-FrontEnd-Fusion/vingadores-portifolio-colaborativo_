interface MessageProps {
  isSuccess: boolean;
  isError: boolean;
};

function Message({ isSuccess, isError }: MessageProps) {
  if (!isSuccess && !isError) return null;

  const message = isSuccess
    ? "Seja bem-vindo(a) à Comunidade Frontend Fusion!\nCheque sua caixa de entrada para validar seu email."
    : "Oops, ocorreu um erro.\nTente novamente!";

  const colorClass = isSuccess ? "text-[#4CAF50]" : "text-[#F44336]";

  return (
    <p className={`whitespace-pre-line text-center font-bold ${colorClass}`}>{message}</p>
  )
};

export default Message;
