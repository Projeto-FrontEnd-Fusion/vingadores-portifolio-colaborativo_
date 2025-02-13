
interface MessageProps {
  status: 'success' | 'error' | null
};

function Message({ status }: MessageProps) {
  return (
    <>
    {status === 'success' && (
      <p className="whitespace-pre-line text-center font-bold text-[#4CAF50]">Seja bem-vindo(a) à Comunidade Frontend Fusion!<br/> Cheque sua caixa de entrada para validar seu email.</p >
    )}

    {status === 'error' && (
      <p className="whitespace-pre-line text-center font-bold text-[#F44336]">Oops, ocorreu um erro.<br/> Tente novamente!</p >
    )}
    </>
  )
};

export default Message;
