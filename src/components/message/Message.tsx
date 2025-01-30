
interface MessageProps {
  status: 'success' | 'error' | null
  message: string | null
}

function Message({ status, message }: MessageProps) {

  return (
    <p className={`whitespace-pre-line text-center font-bold ${status === 'success' ? 'text-[#4CAF50]' : 'text-[#F44336]'}`}>{message}</p >

  )
}

export default Message
